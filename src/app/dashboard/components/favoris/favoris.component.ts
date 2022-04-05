import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjetsService } from 'src/app/services/projets.service';
import { ParticipationPopupComponent } from 'src/app/shared-components/components/participation-popup/participation-popup.component';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.scss']
})
export class FavorisComponent implements OnInit {
  user: any = undefined;
  projets:any;
  constructor(private dialog: MatDialog,private projetService:ProjetsService) { }

  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
    this.getProjet();
  }

  participer(){
    const dialog = this.dialog.open(ParticipationPopupComponent,{

    }).afterClosed().subscribe((resp:any)=>{
      
    })
  }

  getProjet(){
    this.projets =  this.projetService.getProjets();
  }
}
