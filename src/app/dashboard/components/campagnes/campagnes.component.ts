import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { NewCampagneComponent } from './new-campagne/new-campagne.component';

@Component({
  selector: 'app-campagnes',
  templateUrl: './campagnes.component.html',
  styleUrls: ['./campagnes.component.scss']
})
export class CampagnesComponent implements OnInit {
  displayedColumns: string[] = ['projet', 'date' ,'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>([
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE001",
      date:'20/03/2022 08:00 - 22/03/2022 18:59'
    },
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE002",
      date:'20/03/2022 08:00 - 22/03/2022 18:59'
    },
    {
      projet: "SenBiogaz",
      idcampagne: "CAMPAGNE003",
      date:'20/03/2022 08:00 - 22/03/2022 18:59'
    }
  ])
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  newCampagne(){
    const dialogRef = this.dialog.open(NewCampagneComponent,{
      closeOnNavigation:false
    }).afterClosed().subscribe((res:any)=>{
      
    })
  }
}
