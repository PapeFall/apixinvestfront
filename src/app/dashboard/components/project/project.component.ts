import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  stepperOrientation:any;
  steps=[
    {
      id:1,
      name:"Présentation du projet d'entreprise"
    },{
      id:2,
      name:"Les produits / Les services /  Le marché"
    },
    {
      id:3,
      name:"La clientèle"
    },
    {
      id:4,
      name:"La stratégie de l'entreprise"
    },
    {
      id:5,
      name:"Le personnel"
    }
  ];
  step:number = 0;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
   }

  
  ngOnInit(): void {
  }

}
