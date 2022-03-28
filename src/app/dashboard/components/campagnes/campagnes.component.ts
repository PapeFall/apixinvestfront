import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.scss']
})
export class CampagnesComponent implements OnInit {
  displayedColumns: string[] = ['projet', 'idcampagne','date' ,'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE001",
      date:'20/03/2022'
    },
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE002",
      date:'20/03/2022'
    },
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE003",
      date:'20/03/2022'
    }
  ])
  constructor() { }

  ngOnInit(): void {
  }

}
