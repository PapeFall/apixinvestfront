import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DetailAlerteComponent } from './detail-alerte/detail-alerte.component';

@Component({
  selector: 'app-liste-alertes',
  templateUrl: './liste-alertes.component.html',
  styleUrls: ['./liste-alertes.component.scss']
})
export class ListeAlertesComponent implements OnInit {

  alertes = [
    {
      libelle:"nouveau inscrit",
      type:"inscription",
      priorite:"faible",
      date:"20/03/2020 11:03:22"
    },
    {
      libelle:"nouveau projet",
      type:"inscription",
      priorite:"moyen",
      date:"20/03/2020 11:03:22"

    },
    {
      libelle:"message partenaire",
      type:"correspondance",
      priorite:"sévère",
      date:"20/03/2020 11:03:22"

    }
  ]
  displayedColumns: string[] = ['libelle', 'type', 'priorite','date', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>(this.alertes);
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDetail(alerte:any){
    const dialogRef = this.dialog.open(DetailAlerteComponent,{
      data: alerte
    }).afterOpened().subscribe((resp:any)=>{

    })
  }

}
