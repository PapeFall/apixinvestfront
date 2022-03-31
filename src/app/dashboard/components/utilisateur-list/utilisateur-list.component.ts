import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'profil','etat', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    { username: "Aliou Ndiaye", profil: "admin",etat:true, email: "admin@gmail.com"},
    { username: 'Joseph Sarr', profil: 'partenaire',etat:true,email:'partenaire@gmail.com' },
    { username: 'Fatim Wade', profil: 'intervenant',etat:true,email:'intervenant@gmail.com' },
    { username: 'Moussa Diop', profil: 'participant',etat:false,email:'participant@gmail.com' }
  ])
  profils =['admin','partenaire','intervenant','participant'];
  etats = ['Actif','Inactif'];
  constructor() { }

  ngOnInit(): void {
  }

}
