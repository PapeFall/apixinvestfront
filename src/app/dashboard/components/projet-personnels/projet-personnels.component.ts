import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjetEditPersonnelComponent } from '../projet-edit-personnel/projet-edit-personnel.component';

@Component({
  selector: 'app-projet-personnels',
  templateUrl: './projet-personnels.component.html',
  styleUrls: ['./projet-personnels.component.scss']
})
export class ProjetPersonnelsComponent implements OnInit {
  
  personnels=[
    {
      nom:"Omar Diop",
      fonction:"Ingénieur Civil",
      salaire:"200 000",
      contrat: "CDI"
    },
    {
      nom:"Omar Diop",
      fonction:"Ingénieur Civil",
      salaire:"200 000",
      contrat: "CDI"
    },
    {
      nom:"Omar Diop",
      fonction:"Ingénieur Civil",
      salaire:"200 000",
      contrat: "CDI"
    },
    {
      nom:"Omar Diop",
      fonction:"Ingénieur Civil",
      salaire:"200 000",
      contrat: "CDI"
    }
  ]
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  newPersonnel(){
    const dialogRef = this.dialog.open(ProjetEditPersonnelComponent,{

    }).afterClosed().subscribe((result:any)=>{

    })
  }
}
