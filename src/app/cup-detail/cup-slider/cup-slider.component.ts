import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Cup } from '../../model/cup';
import { AppService } from '../../app.service';

@Component({
  selector: 'cup-slider',
  templateUrl: './cup-slider.component.html',
  styleUrls: ['./cup-slider.component.css']
})
export class CupSliderComponent implements OnInit {

  cups: Cup[];
  reOrderArr = [];
  selectedIndex: number;

  currentPos = 0;                 // current Cup Element Pos. (based on selected Cup Element.)
  currentClass = 'translateX(0)'; // default setting.

  cupCount: number = 5; // how many .column elemnt.
  cupWidth: number; // cup element width.
  cupMargin: number = 4;  // cup element margin.

  offsetLev: number = 2;  // how many skips.
  offsetX: number; // Move by this value.

  curLev: number = 0; // Current Cup Move Level. (-8 ~ +8, start 0.)
  maxLev: number; // Maximum number of moves allowed. (count)
  maxPos: number; // Maximum moveable area (px)
    
  /**
   * isLeft : 왼쪽 이동 기능 on/off
   * isRight : 오른쪽 이동 기능 on/off
   */
  isLeft: boolean = true;
  isRight: boolean = true;  

  @ViewChild('sliderArea') sliderArea: ElementRef;
  sliderHeight: number;
  sliderWidth: number;
  

  constructor(
    private appService: AppService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.forEach((urlParameters) => {
      this.selectedIndex = parseInt(urlParameters['id']);
    });
    
    this.cups = this.appService.getCups();
    this.setReOrder();
    this.getElementSize();
    this.currentPos = -(this.cupWidth * (this.cups.length / 2) - (this.cupWidth * 2));
    this.currentClass = 'translateX(' + this.currentPos + 'px)';
    /**
     * maxLev : 좌,우 이동 버튼을 최대 몇 번 누를 수 있게 할지.
     * 현재컵은 슬라이드의 5개 컵 중 가운데에 위치한다.
     * 현재컵 좌-우에는 목록의 이전/이후가 절반씩 위치한다.
     * 전체 컵 개수에서 1을 뺀 값을 offsetLev로 나눈다.
     * 1을 빼는 것은 현재 컵을 뺀 것이다.(현재 컵 기준으로 한다는 것은 현재 컵의 개수는 카운팅하지 않기 때문이다.)
     * offsetLev : 몇 개의 컵씩 이동할 지. 
     */
    this.maxLev = Math.floor(((this.cups.length/2)-1) / this.offsetLev);
    
    console.log(this.maxLev);
    console.log(this.currentClass);
    
  }




  getElementSize() {
    this.sliderWidth = this.sliderArea.nativeElement.offsetWidth;
    this.sliderHeight = this.sliderArea.nativeElement.offsetHeight;
    this.cupWidth = this.sliderWidth / this.cupCount;

    this.offsetX = this.cupWidth * this.offsetLev;
  }
  


  // Relative Content Navigate
  getTargetURL(id: number) {
    return '/detail/' + id;
  }

  
  // Reordering base on selectedIndex.
  setReOrder() {
    let firstIndex = 0;                     // 첫 index
    let lastIndex = this.cups.length - 1;     // 마지막 index   : length는 3*지만, id는 3*까지있기 때문.
    let curIndex = this.selectedIndex;      // 현재 선택 index
    
    const divideIndex = Math.round((this.cups.length / 2));  //어디를 중간으로 할지를 결정하는 기준점.
    console.log(divideIndex);
    let pointPrev = divideIndex;
    let pointNext = 1;
    let count = { prev: 0, next: 0 };


    let prevArr = [];
    let currentArr = [this.cups[curIndex]];
    let nextArr = [];
    
    // prevArr : 0 ~ 7     
    for (let i = 0; i < divideIndex; i++) {
      let prev = curIndex - pointPrev;
      if (prev < 0) {
        prev = lastIndex - count.prev;
        count.prev++;
      }
      prevArr.push(this.cups[prev]);
      pointPrev--;
    }
    


    
    
    (curIndex === 0)
      ? prevArr.sort((a, b) => { return a.id - b.id; })       // 현재 인덱스가 0인 경우
      : isNeedOrdering();                                     // 현재 인덱스가 0이 아닌경우
    
    
    
    
    function isNeedOrdering() {
      let isZero = prevArr.findIndex((el) => { return el.id === 0; });        // id 0 을 찾는다.
      if (isZero !== -1) { reOrdering(); }                                    // 있다면 0 이전 원소만 재정렬한다.

      function reOrdering() {
        let toSliceArr = prevArr.slice(0, isZero);                          // 이전 목록의 첫 인덱스부터 0인덱싱까지 따로 뽑아 배열 생성.
        toSliceArr.sort((a, b) => { return a.id - b.id; });

        for (let i = 0; i < toSliceArr.length; i++) {
          prevArr[i] = toSliceArr[i];
        }
      }
    }


    
    
    



    // nextArr : 8 to 15
    for (let j = divideIndex; j < lastIndex; j++) {
      let next = curIndex + pointNext;
      if (next > lastIndex) {
        next = firstIndex + count.next;
        count.next++;
      }
      nextArr.push(this.cups[next]);
      pointNext++;
    }

    //최종 Arr 형태
    this.reOrderArr = prevArr.concat(currentArr, nextArr);
    
  }

  
  // .slider-item element position update.
  updatePos(dir: string) {
    // console.log("currentPos", this.currentPos);
    // console.log("offsetX", this.offsetX);
    // console.log("curLev before", this.curLev);

    if (dir === 'right') {
      this.curLev++;
      this.currentPos = this.currentPos - this.offsetX;

    } else if (dir === 'left') {
      this.curLev--;
      this.currentPos = this.currentPos + this.offsetX;
    }


    this.isLeft = (this.curLev <= (-this.maxLev)) ? false : true;
    this.isRight = (this.curLev >= this.maxLev) ? false : true;
    

    console.log("currentPos", this.currentPos);
    console.log("curLev after", this.curLev);

    this.currentClass = 'translateX(' + this.currentPos + 'px)';
  }
  
}