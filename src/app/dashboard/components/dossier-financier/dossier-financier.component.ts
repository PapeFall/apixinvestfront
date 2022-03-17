import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators'
@Component({
  selector: 'app-dossier-financier',
  templateUrl: './dossier-financier.component.html',
  styleUrls: ['./dossier-financier.component.scss']
})
export class DossierFinancierComponent implements OnInit {
  stepperOrientation;
  constructor(private breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
   }
  ngOnInit(): void {
  }

}
