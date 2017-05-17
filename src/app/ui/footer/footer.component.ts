import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  comment: string = "누군가 정리해줬으면 좋겠다 싶었는데";
  author: string = "스투키 스튜디오";
  email: string = "stuckyi.info@gmail.com";
  lastUpdate: string = "2017. 05. 15";

  constructor() { }

  ngOnInit() {
  }

}
