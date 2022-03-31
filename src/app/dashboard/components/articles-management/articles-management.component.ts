import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-articles-management',
  templateUrl: './articles-management.component.html',
  styleUrls: ['./articles-management.component.scss']
})
export class ArticlesManagementComponent implements OnInit {
  displayedColumns: string[] = ['titre','etat', 'date' ,'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    {
      titre: "SenBiogaz",
      etat: true,
      date:'20/03/2022',
      secteur:'Energie'
    },
    {
      titre: "Tolbi",
      etat: true,
      date:'20/03/2022',
      secteur:'Agriculture'
    },
    {
      titre: "SenBiogaz",
      etat: true,
      date:'20/03/2022',
      secteur:'Agriculture'
    },
  ])
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

}
