import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-modern-progress-bar',
  templateUrl: './modern-progress-bar.component.html',
  styleUrls: ['./modern-progress-bar.component.css']
})
export class ModernProgressBarComponent implements OnInit {
  @Input() public id: string = "";
  @Input() public title: string = "";
  @Input() public append: string = "";

  public ids: string[] = []
  public data: number = 0;

  test(data: number) {
    var progresses: number = (4 * data) / 100;
    var fullProgresses: number = Math.floor(progresses);
    var remainder: number = Math.floor((progresses - fullProgresses) * 100);

    let progressesArray = [0,0,0,0];
    let lastCount: number = 0;
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
      this.data = Math.random()*100;
      this.test(this.data)
    }, 1000)
  }

  protected readonly Math = Math;
}
