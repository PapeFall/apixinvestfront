import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ParticipationPopupComponent } from 'src/app/shared-components/components/participation-popup/participation-popup.component';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  user: any = undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
  }

  participer(){
    const dialog = this.dialog.open(ParticipationPopupComponent,{

    }).afterClosed().subscribe((resp:any)=>{
      
    })
  }
}
