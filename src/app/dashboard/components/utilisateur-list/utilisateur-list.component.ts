import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.scss']
})
export class UtilisateurListComponent implements OnInit {
  displayedColumns: string[] = ['username', 'email', 'profil', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    {
      username: "Aliou Ndiaye",
      email: "admin@gmail.com",
      profil: "admin"
    },
    { username: 'Joseph Sarr', profil: 'partenaire',email:'partenaire@gmail.com' },
    { username: 'Fatim Wade', profil: 'intervenant',email:'intervenant@gmail.com' },
    { username: 'Moussa Diop', profil: 'participant',email:'participant@gmail.com' }
  ])
  constructor() { }

  ngOnInit(): void {
  }

}
