import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'util-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  socialShare(sns: string) {
    let openUrl: string;
    
    switch (sns) {
        case 'facebook':
            openUrl = "https://www.facebook.com/sharer/sharer.php?u=";
            break;
        case 'twitter':
            openUrl = "https://twitter.com/intent/tweet?text=helloMenstrualcup?";
            break;
        default:
            openUrl = 'none';
            break;
    }
    //check each sns share url.
    (openUrl === 'none')
        ? location.reload()
        : window.open(openUrl);
  }

}
