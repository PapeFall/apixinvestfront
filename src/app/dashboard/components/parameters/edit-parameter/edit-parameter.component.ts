import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-parameter',
  templateUrl: './edit-parameter.component.html',
  styleUrls: ['./edit-parameter.component.scss']
})
export class EditParameterComponent implements OnInit {

  priorites = ['sévère','moyen','faible']
  types=[]
  constructor() { }

  ngOnInit(): void {
  }

}
