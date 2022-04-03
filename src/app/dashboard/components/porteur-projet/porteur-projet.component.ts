import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-porteur-projet',
  templateUrl: './porteur-projet.component.html',
  styleUrls: ['./porteur-projet.component.scss']
})
export class PorteurProjetComponent implements OnInit {

  displayedColumns: string[] = ['ninea', 'email', 'nom','representant', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    { ninea: "120304", email: "contact@sonatel.sn",nom:"SONATEL", representant: "Amadou Daff"},
    { ninea: "340304", email: "contact@apix.sn",nom:"APIX", representant: "Fatim Diop"},

  ])
  profils =['admin','partenaire','intervenant','participant'];
  etats = ['Actif','Inactif'];
  constructor() { }

  ngOnInit(): void {
  }

}
