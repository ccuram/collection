import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  comment: string = "이걸 내가 다 모으면 아마 깜짝놀랄거야";
  author: string = "스투키 스튜디오";
  email: string = "stuckyi.info@gmail.com";
  lastUpdate: string = "2017. 05. 24";

  constructor() { }

  ngOnInit() {
  }

}
