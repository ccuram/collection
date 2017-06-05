import { Component, OnInit, Input } from '@angular/core';
import "rxjs/Rx";

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Cup } from '../model/cup';
import { CUPS } from '../data/cups';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cups;
  isResult: boolean;

  key = "";
  field = "name";
  ignoreCase = false;
  

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.cups = CUPS;
    this.isResult = false;
    
  }

  changeStateResult(resultState: string) {
    // console.log("changeStateResult", resultState);
    setTimeout(() => {
      this.isResult = (resultState === 'on') ? true : false;
    }, 10);
  }



  // Relative Content Navigate
  getTargetURL(id: number) {
    console.log("getTargetUrl", id);
    return '/detail/' + id;
  }

  
}
