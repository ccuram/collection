import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { AppService } from '../app.service';
import { Cup } from '../model/cup';

@Component({
  selector: 'cup-detail',
  templateUrl: './cup-detail.component.html',
  styleUrls: ['./cup-detail.component.css']
})
export class CupDetailComponent implements OnInit, AfterViewInit {
  cup: Cup;

  // image 
  imgPath: string = '../../assets/images';
  imgType: string = '_total';
  imgColor: any;
  
  // modal
  isModal: boolean = false;



  //tooltip
  isTooltip: boolean = false;
  curTooltipPos: any = { top: 0, right: 0, bottom: 0, left: 0 };
  curTooltipInfo: string = '';
  curTooltipArr = [];


  tooltipPos: any;
  tooltipPosArr = [];

  tooltip_offsetY: number = 40; // vertical distance(tooltip with targetElement). (px)
  tooltip_offsetX: number = 0;  // horizontal distance(tooltip with targetElement). (px)



  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private elf: ElementRef
  ) { }
  

  ngOnInit() {
    let cupId: number;
    this.activatedRoute.params.forEach((urlParameters) => {
      cupId = parseInt(urlParameters['id']);  
    });

    this.cup = this.appService.getCup(cupId);
    this.imgColor = this.cup.color[0];
    
    
    window.scrollTo(0, 0);      // 초기화시 최 상단으로 이동
  }

  ngAfterViewInit() {
    this.getTooltipPos();
  } 


  openWindow(url: string) {
    window.open(url);
  }

  getTooltipPos() {
    // selector : all target Element.
    let targetEls = document.querySelectorAll('.color-chip');
    // get Position of target Element.
    for (let i = 0; i < targetEls.length; i++){
      let colorchip = this._getBoundingClientRect(targetEls[i]);
      colorchip.top = colorchip.top - this.tooltip_offsetY;
      colorchip.left = colorchip.left - this.tooltip_offsetX;
      // all colorchips pos in a array (only current cup)
      this.tooltipPosArr.push(colorchip);
    }
  }

  _getBoundingClientRect(el: any) {
      let rect = el.getBoundingClientRect();
      // element.getBoundingClientRect는 읽기전용이라 값 할당이 안되기때문.
      return {
          top: rect.top,
          bottom: rect.bottom,
          left: rect.left,
          right: rect.right,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
      };
  }

  viewColor(stat: boolean, index: any) {
    this.isTooltip = stat;
    this.curTooltipPos = this.tooltipPosArr[index];
    this.curTooltipInfo = this.cup.color[index].name; 
  }

  

  onModal() {
    this.isModal = !this.isModal;
  }



  changeView(viewType: string) {
    this.imgType = viewType;
  }

  changeColor(colorType: string) {
    this.imgColor = colorType;
  }
  
}
