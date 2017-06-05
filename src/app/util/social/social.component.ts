import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'util-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
    shareMsg: string = "생리컵에 대한 정보를 찾는다면 이곳 '모두의 생리컵'사이트를 확인하세요. 링크는 ";
    url: string = "https://cups.kr";
  
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
            openUrl = "https://twitter.com/intent/tweet?text=" + this.shareMsg + this.url;
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
