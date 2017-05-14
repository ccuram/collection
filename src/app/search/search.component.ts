import { Component, ViewEncapsulation, OnInit } from '@angular/core';
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

  isSearch: boolean = false;
  isResult: boolean = false;

  key = "";
  field = "name";
  ignoreCase = false;
  

  constructor(private router: Router) { }
  ngOnInit(): void { }

  onSearch() {
    this.isSearch = !this.isSearch;
  }

  changeStateResult(s: string) {
    // search result view first. and then do this.
    setTimeout(() => {
      this.isResult = (s === 'on') ? true : false;
    }, 0);
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
    let link = ['/detail', searchedCup.id];
    this.router.navigate(link); 
    setTimeout(() => { location.reload(); }, 0);
    
  }
}
