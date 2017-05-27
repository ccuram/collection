import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { trigger, state, transition, animate, style, keyframes } from '@angular/animations';
import { AppService } from '../app.service';
import { Cup } from '../model/cup';

/*
animations: [
    trigger('hoverState', [
      state('unhover', style({
        // transform: 'translateY(0px) scale(1)'
      })),
      state('onhover', style({
        // transform: 'translateY(-40px) scale(1.35)'
      })),
      transition('* => *', [
        animate(2380, keyframes([
          style({ transform: 'translate3d(100.00px, 0, 0) scale(0)', offset: 0 }),
          style({ transform: 'translate3d(-41.06px, 0, 0) scale(1.4106)', offset: 0.1 }),
          style({ transform: 'translate3d(16.09px, 0, 0) scale(0.8391)', offset: 0.21 }),
          style({ transform: 'translate3d(-6.31px, 0, 0) scale(1.0631)', offset: 0.32 }),
          style({ transform: 'translate3d(2.47px, 0, 0) scale(0.9753)', offset: 0.43 }),
          style({ transform: 'translate3d(-0.97px, 0, 0) scale(1.0097)', offset: 0.55 }),
          style({ transform: 'translate3d(0.38px, 0, 0) scale(0.9962)', offset: 0.66 }),
          style({ transform: 'translate3d(-0.15px, 0, 0) scale(1.0015)', offset: 0.77 }),
          style({ transform: 'translate3d(0.06px, 0, 0) scale(0.9994)', offset: 0.88 }),
          style({ transform: 'translate3d(-0.02px, 0, 0) scale(1.0002)', offset: 1 })
        ]))
      ]),
      transition('onhover => unhover', animate('100ms ease-out'))
    ])
  ]
  */


@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.css']
})
export class CupsComponent implements OnInit {

  
  cups: Cup[];
  sortMethod = "desc";
  sortKey = "totalLength";

  // hover
  curHoverCupId: any;

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getCups();
  }
  getCups(){
    this.cups = this.appService.getCups();
  }

  gotoDetail(id: number) {
    let link = ['/detail', id];
    this.router.navigate(link);
  }

  cupUp(cup: Cup) {
    console.log("cupUp!", cup.name);
    this.curHoverCupId = cup.id;
  }

  getBg(url: string) {
    let imgUrl = 'url("/images/cups/' + url + '");';
    return imgUrl;
  }

}
