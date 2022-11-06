import { Component, OnInit } from '@angular/core';
import { clients } from '../client-grid/client-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // @ts-ignore
  clients;

  constructor() {}

  ngOnInit() {
    if (clients.length >= 3) {
      clients.length = 3;
    }
    this.clients = clients;
  }
}
