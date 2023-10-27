import {AfterViewInit, Component, Input} from '@angular/core';
import * as THREE from "three";
import {GLTF, GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {WebGLRenderer} from "three";

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements AfterViewInit {
  @Input() public modelPath: string = "/assets/bus/bus.gltf";
  @Input() public canvasId: string = "0";
  @Input() public width: number = 800;
  @Input() public height: number = 800;
  @Input() public rotateX: number = 0;
  @Input() public rotateY: number = 0;
  @Input() public rotateZ: number = 0;

  private ambientLight!: THREE.AmbientLight;
  private directionalLight!: THREE.DirectionalLight;
  private light1!: THREE.PointLight;

  private light2!: THREE.PointLight;

  public fieldOfView: number = 1;

  private camera!: THREE.PerspectiveCamera;

  private loader = new GLTFLoader();
  private scene!: THREE.Scene;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;
  private model: any;
  constructor() {

  }

  private createControls = () => {
    const renderer = new WebGLRenderer({ antialias: true });
    renderer.setSize(this.width, this.height);
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
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
    )
    this.camera.position.x = 0;
    this.camera.position.y = 60;
    this.camera.position.z = -300;

    this.ambientLight = new THREE.AmbientLight(0x00000, 100);
    this.scene.add(this.ambientLight);
    this.directionalLight = new THREE.DirectionalLight(0xffffff, 10);
    this.directionalLight.position.set(1, 1, 1);
    this.directionalLight.castShadow = true;
    this.scene.add(this.directionalLight);
    this.light1 = new THREE.PointLight(0xffffff, 500);
    this.light1.position.set(10, 0, -10);
    this.scene.add(this.light1);
    this.light2 = new THREE.PointLight(0xffffff, 500);
    this.light2.position.set(-10, 0, -10);
    this.scene.add(this.light2);
  }

  private startRenderingLoop() {
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

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.autoRotate = true;
    this.controls.enableZoom = true;
    this.controls.enablePan = false;
    this.controls.update();
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
