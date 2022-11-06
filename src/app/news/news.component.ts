import { Component, OnInit } from '@angular/core';
import { newses } from './news-list';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  // @ts-ignore
  newses;

  constructor() {}

  scrollForward() {
    let content = document.querySelector('#news');
    let scrollAmount = 0;

    var slideTimer = setInterval(function () {
      if (content) {
        content.scrollLeft += 10;
        scrollAmount += 10;
        if (scrollAmount >= 400) {
          window.clearInterval(slideTimer);
        }
      }
    }, 10);
  }
  scrollBack() {
    let content = document.querySelector('#news');
    let scrollAmount = 0;

    var slideTimer = setInterval(function () {
      if (content) {
        content.scrollLeft -= 10;
        scrollAmount += 10;
        if (scrollAmount >= 400) {
          window.clearInterval(slideTimer);
        }
      }
    }, 10);
  }

  ngOnInit() {
    this.newses = newses.reverse();
    if (newses.length >= 3) {
      newses.length = 3;
    }
  }
}
