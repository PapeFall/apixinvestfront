import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

 
  sideBarOpen = true;
  mobile = false;

  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler($event: any) {
    this.sideBarOpen = !this.sideBarOpen;
    this.mobile = this.sideBarOpen;
  }


}
