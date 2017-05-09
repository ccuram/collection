import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import "rxjs/Rx";

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Cup } from '../model/cup';
import { CUPS } from '../data/cups';

import { CompleterService, CompleterData } from 'ng2-completer';



@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
 
  isSearch: boolean = false;
  cups: Cup[] = CUPS;

  public searchStr: string;
  public plceholder: string = "페미사이클";
  public dataService: CompleterData;
  // public searchData;

  constructor(private completerService: CompleterService, public router: Router) {
    this.dataService = completerService.local(this.cups, 'name', "name"); // data, searchTerm, viewTerm.
  }

  ngOnInit(): void {
    
  }

  onSearch() {
    console.log("click on search!");
      this.isSearch = !this.isSearch;
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
  close() {
    this.isSearch = false;
  }
  
}
