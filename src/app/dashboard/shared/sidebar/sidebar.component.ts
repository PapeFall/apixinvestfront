import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() {

   }
  user:any = null;
  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
  }

}
