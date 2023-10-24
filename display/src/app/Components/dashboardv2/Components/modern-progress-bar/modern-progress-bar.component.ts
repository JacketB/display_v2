import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modern-progress-bar',
  templateUrl: './modern-progress-bar.component.html',
  styleUrls: ['./modern-progress-bar.component.css']
})
export class ModernProgressBarComponent implements OnInit {
  @Input() public id: string = "";

  public ids: string[] = []

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
      document.getElementById(this.id+'progress'+i)!.style.width = progressesArray[i]+"%";
    }
  }

  ngOnInit() {
    this.ids =[this.id+"progress0", this.id+"progress1", this.id+"progress2", this.id+"progress3"];
    setInterval(() => {
      var data = Math.random()*100;
      this.test(data)
    }, 1000)
  }
}
