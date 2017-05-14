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
  cups: Cup[] = CUPS;

  @Input() isSearch;

  isResult: boolean = false;

  key = "";
  field = "name";
  ignoreCase = false;
  

  constructor(private router: Router) { }
  ngOnInit(): void { 
    console.log('isSearch', this.isSearch);
    console.log('isResult', this.isResult);
  }

  onSearch() {
    this.isSearch = !this.isSearch;
  }

  changeStateResult(s: string) {
    // search result view first. and then do this.
    setTimeout(() => {
      this.isResult = (s === 'on') ? true : false;
    }, 100);
  }
  onSelect(obj: any) {
    console.log(obj);
    let name = obj.searchStr;
    if (name === undefined || name === "") {
      console.log(name);
      return;
    }

    let selectedCup = this.cups.find(cup => { return cup.name === name; });
    let link = ['/detail', selectedCup.id];

    this.router.navigate(link); 
    location.reload();
  }
  gotoDetail(searchedCup: Cup) {
    console.log("gotoDetail()");

    let link = ['/detail', searchedCup.id];
    this.router.navigate(link); 
    setTimeout(() => {
      this.isResult = false;
      this.isSearch = false;
      history.go(0);
      // location.reload();
    }, 0);
    
  }
}
