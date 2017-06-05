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
    setTimeout(() => {
      this.isResult = (resultState === 'on') ? true : false;
    }, 0);
  }

  gotoDetail(searchedCup: Cup) {
    console.log("gotoDetail()");

    let link = ['/detail', searchedCup.id];
    this.router.navigate(link); 
    history.go(0);
    window.scrollTo(0, 0);
  }



  // Relative Content Navigate
  getTargetURL(id: number) {
    return '/detail/' + id;
  }

  
}
