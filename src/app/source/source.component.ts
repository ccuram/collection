import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source',
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})
export class SourceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }


  openWindow(url: string) {
    let urls = 'http://' + url;

    window.open(urls);
  }
}
