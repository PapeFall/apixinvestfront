import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-porteur-projet',
  templateUrl: './porteur-projet.component.html',
  styleUrls: ['./porteur-projet.component.scss']
})
export class PorteurProjetComponent implements OnInit {

  displayedColumns: string[] = ['ninea', 'email', 'nom', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    { ninea: "120304", email: "ad@gmail.com", nom: "Amadou Daff"},
    { ninea: "340304", email: "fdiop@gmail.com", nom: "Fatim Diop"},

  ])
  profils =['admin','partenaire','intervenant','participant'];
  etats = ['Actif','Inactif'];
  constructor() { }

  ngOnInit(): void {
  }

}
