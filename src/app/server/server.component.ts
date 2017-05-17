import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-server',
 templateUrl: './server.component.html',


})


export class ServersComponent implements OnInit {

  serverID: number = 10;
  serverStatus: string = 'Offline';
  constructor() { }

  ngOnInit() {
  }

}

