import {Component, OnInit} from '@angular/core';
import * as msgpack from '@msgpack/msgpack';
import {iconsFirstLine} from "../dashboard/icons-routes";
@Component({
  selector: 'app-dashboardv2',
  templateUrl: './dashboardv2.component.html',
  styleUrls: ['./dashboardv2.component.css']
})
export class Dashboardv2Component implements OnInit{
  speedLabel = "Скорость";
  speedAppendText = "км/ч";
  time = new Date();

  speedMarkers = {
    "0": {
      "color": "#ffffff",
      "size": 8,
      "label": "30",
      "type": "line"
    },
    "20": {
      "color": "#ffffff",
      "size": 8,
      "label": "20",
      "type": "line"
    },
    "40": {
      "color": "#ffffff",
      "size": 8,
      "label": "40",
      "type": "line"
    },
    "60": {
      "color": "#ffffff",
      "size": 8,
      "label": "60",
      "type": "line"
    },
    "80": {
      "color": "#ffffff",
      "size": 8,
      "label": "80",
      "type": "line"
    },
    "100": {
      "color": "#ffffff",
      "size": 8,
      "label": "100",
      "type": "line"
    },
    "120": {
      "color": "#ffffff",
      "size": 8,
      "label": "120",
      "type": "line"
    },
    "140": {
    "color": "#ffffff",
    "size": 8,
    "label": "140",
    "type": "line"
    }
  }

  thresholdConfig = {
    '0': {color: 'green'},
    '60': {color: 'orange'},
    '100': {color: 'red'}
  };

  socketData: any = {
    bus_speed: 0,
    bus_x: 0,
    bus_y: 0,
    bus_z: 0
  }

  webSocket = new WebSocket("ws://localhost:8080/ws");

  oilHeight = 0
  temperatureHeight = 0
  protected readonly Math = Math;

  ngOnInit() {
    this.webSocket.onmessage = (event) => {
      event.data.arrayBuffer().then((response:any) => {
        this.socketData = msgpack.decode(response);
      })
    };

    this.webSocket.onerror = (error) => {
      console.log('WebSocket error: ', error);
    };

    this.webSocket.onclose = (event) => {
      console.log('WebSocket connection closed: ', event);
    };

    setInterval(() => {
      this.time = new Date();
      var data = Math.random()*100;
      this.test(data)
    }, 1000);

  }

  constructor() {

  }

  test(data: number) {
    var progresses = (4 * data) / 100;
    var fullProgresses = Math.floor(progresses);
    var remainder = Math.floor((progresses - fullProgresses) * 100);

    let progressesArray = [0,0,0,0];
    let lastCount = 0;
    for(let i = 0; i < fullProgresses; i++) {
      progressesArray[i] = 100
      lastCount++;
    }

    progressesArray[lastCount]=remainder;
    if(progressesArray.length !== 4) {
      progressesArray.push(0);
    }

    for(let i = 0; i < progressesArray.length; i++) {
      document.getElementById('progress'+i)!.style.width = progressesArray[i]+"%";
    }
  }

  protected readonly iconsFirstLine = iconsFirstLine;
}
