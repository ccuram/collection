import { Injectable, OnInit } from '@angular/core';
import { Cup } from './model/cup';
import { CUPS } from './data/cups';

@Injectable()
export class AppService implements OnInit{
  cups: Cup[];
  selectedIndex: number;
  

  constructor() { 
    this.cups = CUPS;  
  }

  ngOnInit() {
    this.cups.sort((a, b) => { return a.totalLength - b.totalLength; });
  }

  getSelectedIndex() {
    return this.selectedIndex;
  }
  
  getCup(id: number) {
    return this.cups.find(cup => { return cup.id === id; });
  }

  getCups() {
    return this.cups;
  }
}
