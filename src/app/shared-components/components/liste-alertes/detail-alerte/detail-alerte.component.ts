import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-alerte',
  templateUrl: './detail-alerte.component.html',
  styleUrls: ['./detail-alerte.component.scss']
})
export class DetailAlerteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public alerte:any) { }

  ngOnInit(): void {
  }

}
