import { Component, HostListener, OnInit } from '@angular/core';
import { clients } from './client-list';

@Component({
  selector: 'app-client-grid',
  templateUrl: './client-grid.component.html',
  styleUrls: ['./client-grid.component.scss'],
})
export class ClientGridComponent implements OnInit {
  // @ts-ignore
  clients;

  constructor() {}

  ngOnInit() {
    this.clients = clients;
  }

  // @ts-ignore
}
