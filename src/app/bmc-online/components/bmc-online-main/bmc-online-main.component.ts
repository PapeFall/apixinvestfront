import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmc-online-main',
  templateUrl: './bmc-online-main.component.html',
  styleUrls: ['./bmc-online-main.component.scss']
})
export class BmcOnlineMainComponent implements OnInit {

  panelOpenState=false;
  constructor() { }

  ngOnInit(): void {
  }

}
