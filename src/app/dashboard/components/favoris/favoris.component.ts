import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  user: any = undefined;

  constructor() { }

  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
  }

}
