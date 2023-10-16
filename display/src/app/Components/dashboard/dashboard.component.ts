import { Component } from '@angular/core';
import {
  eightLineSignals,
  fiveLineSignals,
  fourLightSignals,
  iconsFirstLine,
  iconsHeadLine,
  iconsSecondLine,
  iconsThirdLine, nineLineSignals, sevenLineSignals, sixLineSignals
} from "./icons-routes";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  public headLineSignals = iconsHeadLine;  public firstLineSignals = iconsFirstLine;
  public secondLineSignals = iconsSecondLine; public thirdLineSignals = iconsThirdLine;
  public fourLineSignals = fourLightSignals; public fiveLineSignals = fiveLineSignals;
  public sixLineSignals = sixLineSignals; public sevenLineSignals = sevenLineSignals;
  public eightLineSignals = eightLineSignals; public nineLineSignals = nineLineSignals;
  constructor() {
  }
}
