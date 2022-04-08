import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-porteur-projet',
  templateUrl: './porteur-projet.component.html',
  styleUrls: ['./porteur-projet.component.scss']
})
export class PorteurProjetComponent implements OnInit {

  displayedColumns: string[] = ['raison', 'email', 'nom', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    { raison: "SenBio", email: "ad@gmail.com", nom: "Amadou Daff"},
    { raison: "ATP SA", email: "fdiop@gmail.com", nom: "Fatim Diop"},

  ])
  profils =['admin','partenaire','intervenant','participant'];
  etats = ['Actif','Inactif'];
  constructor() { }

  ngOnInit(): void {
  }

}
