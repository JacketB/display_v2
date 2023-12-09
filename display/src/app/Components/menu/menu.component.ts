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
  tabs = ['Салон', 'Двигатель', 'Трансмиссия', 'Колеса'];
  activeTab = this.tabs.indexOf(this.tabs[0]);

  @HostListener('window:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.activeTab = (this.activeTab + 1) % this.tabs.length;
    } else if (event.key === 'ArrowLeft') {
      this.activeTab = (this.activeTab - 1 + this.tabs.length) % this.tabs.length;
    }
  }
}
