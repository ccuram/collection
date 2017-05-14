import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppService } from '../app.service';
import { Cup } from '../model/cup';

@Component({
  selector: 'cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit {
  cup: Cup;
  imgPath: string = '../../assets/images';


  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute) { }

  
  ngOnInit() {
    let cupId: number;
    this.activatedRoute.params.forEach((urlParameters) => {
      cupId = parseInt(urlParameters['id']);  
    });

    this.cup = this.appService.getCup(cupId);

    window.scrollTo(0, 0);                  // 초기화시 최 상단으로 이동
  }



  onTooltip(act: string) {
    console.log("tooltip is active!");
  }

  
}
