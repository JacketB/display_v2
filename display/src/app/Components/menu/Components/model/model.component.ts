import {AfterViewInit, Component, Input} from '@angular/core';
import * as THREE from "three";
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {CSS2DRenderer} from "three/examples/jsm/renderers/CSS2DRenderer";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements AfterViewInit {
  @Input() public modelPath: string = "/assets/bus.gltf"
  @Input() public canvasId: string = "0"
  @Input() public width: number = 800
  @Input() public height: number = 800
  @Input() public rotateX: number = 0;
  @Input() public rotateY: number = 0;
  @Input() public rotateZ: number = 0;

  public fieldOfView: number = 1;

  public nearClippingPane: number = 1;

  public farClippingPane: number = 1000;

  private camera!: THREE.PerspectiveCamera;

  private loader = new GLTFLoader();
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private ambientLight!: THREE.AmbientLight;

  private model: any;

  private directionalLight!: THREE.DirectionalLight;
  constructor() {

  }

  private createControls = () => {
    const renderer = new CSS2DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0px';
    document.body.appendChild(renderer.domElement);
    this.controls = new OrbitControls(this.camera, renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
  };


  private createScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('#000000')
    this.loader.load(this.modelPath, (gltf: GLTF) => {
      this.model = gltf.scene.children[0];


      this.scene.add(this.model)
    })
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPane,
      this.farClippingPane
    )
    this.camera.position.x = 500;
    this.camera.position.y = 300;
    this.camera.position.z = -500;
    this.ambientLight = new THREE.AmbientLight(0x00000, 100);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    this.directionalLight.position.set(10, 1, 1);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
  }

  private getAspectRatio() {
    // @ts-ignore
    return this.width / this.height;
  }

  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    // @ts-ignore
    this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(this.canvasId), antialias: true });
    this.renderer.setPixelRatio(devicePixelRatio);
    // @ts-ignore
    this.renderer.setSize(this.width, this.height);
    let component: ModelComponent = this;
    (function render() {
      component.renderer.render(component.scene, component.camera);
      component.animateModel();
      requestAnimationFrame(render);
    }());
  }
  private animateModel() {
    if (this.model) {
      this.model.rotation.y += this.rotateY / 10000;
    }
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.createControls();
  }
}
