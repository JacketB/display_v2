import {AfterViewInit, Component, HostListener} from '@angular/core';
import * as THREE from "three"
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  slides = ['red', 'green', 'blue', '#08e8a3'];
  index = 0;

  images = [
    './assets/wheels-removebg-preview.png',
    './assets/bus-removebg-preview.png',
    './assets/doors-removebg-preview.png',
    './assets/engine-removebg-preview.png',
  ]

  models = [
    './assets/cacodemon/scene.gltf',
    './assets/arachnotron/scene.gltf',
    './assets/drone/scene.gltf',
    './assets/slayer/scene.gltf',
  ]

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.index = (this.index + 1) % this.slides.length;
    } else if (event.key === 'ArrowLeft') {
      this.index = (this.index - 1 + this.slides.length) % this.slides.length;
    }
  }

  selectSlide(index: number) {
    this.index = index;
  }
}
