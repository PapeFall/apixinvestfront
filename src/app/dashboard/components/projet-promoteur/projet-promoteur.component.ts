import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjetEditPromoteurComponent } from '../projet-edit-promoteur/projet-edit-promoteur.component';

@Component({
  selector: 'app-projet-promoteur',
  templateUrl: './projet-promoteur.component.html',
  styleUrls: ['./projet-promoteur.component.scss']
})
export class ProjetPromoteurComponent implements OnInit {

  associes = [
    {
      nomComplet: "Moussa Diop",
      fonction: "Ingénieur"
    },
    {
      nomComplet: "Moussa Diop",
      fonction: "Ingénieur"
    },
    {
      nomComplet: "Moussa Diop",
      fonction: "Ingénieur"
    }
  ];
  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  newAssocie(){
    const dialogRef = this.dialog.open(ProjetEditPromoteurComponent,{

    });
  }
}
