import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import "rxjs/Rx";

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AppService } from '../app.service';
import { CompleterService, CompleterData } from 'ng2-completer';
import { CUPS } from '../data/cups';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements OnInit {
 
  isSearch: boolean = false;
    
  public searchStr: string;
  public plceholder: string = "페미사이클";
  public dataService: CompleterData;
  public searchData;

  constructor(
      private completerService: CompleterService,
      private appService: AppService
  ) {
      this.searchData = this.appService.getCups();
      this.dataService = completerService.local(this.searchData, 'name', "name"); // data, searchTerm, viewTerm.
  }

  ngOnInit(): void {
  }

  onSearch() {
    console.log("click on search!");
      this.isSearch = !this.isSearch;
  }  

  close() {
    this.isSearch = false;
  }
  
}
