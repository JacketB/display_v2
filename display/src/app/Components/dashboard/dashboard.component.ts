import { Component } from '@angular/core';
/*import {
  eightLineSignals,
  fiveLineSignals,
  fourLightSignals,
  iconsFirstLine,
  iconsHeadLine,
  iconsSecondLine,
  iconsThirdLine, nineLineSignals, sevenLineSignals, sixLineSignals
} from "./icons-routes";*/

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
/*  public headLineSignals = iconsHeadLine;  public firstLineSignals = iconsFirstLine;
  public secondLineSignals = iconsSecondLine; public thirdLineSignals = iconsThirdLine;
  public fourLineSignals = fourLightSignals; public fiveLineSignals = fiveLineSignals;
  public sixLineSignals = sixLineSignals; public sevenLineSignals = sevenLineSignals;
  public eightLineSignals = eightLineSignals; public nineLineSignals = nineLineSignals;*/

  speedLabel = "Скорость";
  speedAppendText = "км/ч";

  rpmLabel = "Обороты x 100"
  rpmAppendText = "об/мин"

  speedMarkers = {
    "0": {
      "color": "#ffffff",
      "size": 15,
      "label": "30",
      "type": "line"
    },
    "30": {
      "color": "#ffffff",
      "size": 8,
      "label": "30",
      "type": "line"
    },
    "60": {
      "color": "#ffffff",
      "size": 15,
      "label": "60",
      "type": "line"
    },
    "90": {
      "color": "#ffffff",
      "size": 8,
      "label": "90",
      "type": "line"
    },
    "120": {
      "color": "#ffffff",
      "size": 15,
      "label": "120",
      "type": "line"
    }
  }
  rpmMarkers = {
    "0": {
      "color": "#ffffff",
      "size": 5,
      "label": "0",
      "type": "line"
    },
    "10": {
      "color": "#ffffff",
      "size": 5,
      "label": "5",
      "type": "line"
    },
    "20": {
      "color": "#ffffff",
      "size": 5,
      "label": "5",
      "type": "line"
    },
    "30": {
      "color": "#ffffff",
      "size": 5,
      "label": "5",
      "type": "line"
    },
  }

  barThresholdConfig = {
    '0': {color: 'red'},
    '5': {color: '#00e035'},
  }

  temperatureThresholdConfig = {
    '40': {color: '#00e035'},
    '100': {color: 'red'}
  }

  oilThresholdConfig = {
    '0': {color: 'red'},
    '25': {color: '#00e035'}
  }

  rpmThresholdConfig = {
    '0': {color: '#00e035red'},
    '20': {color: 'red'}
  }

  oilHeight = 0
  temperatureHeight = 0
  rpmValue = 0
  speedValue = 0


  constructor() {
    setInterval(() => {
      this.oilHeight = Math.random() * 100;
      this.temperatureHeight = Math.random() * (120 - 40) + 40

      this.rpmValue = Math.random() * 30
      this.speedValue = Math.random() * 120
    }, 1000)
  }

  protected readonly Math = Math;
}
