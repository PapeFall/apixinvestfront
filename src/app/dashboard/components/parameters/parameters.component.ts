import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EditParameterComponent } from './edit-parameter/edit-parameter.component';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.scss']
})
export class ParametersComponent implements OnInit {

  alertes = [
    {
      libelle:"nouveau inscrit",
      type:"inscription",
      priorite:"faible"
    },
    {
      libelle:"nouveau projet",
      type:"inscription",
      priorite:"moyen"
    },
    {
      libelle:"message partenaire",
      type:"correspondance",
      priorite:"sévère"
    }
  ]
  displayedColumns: string[] = ['libelle', 'type', 'priorite', 'action'];
  dataSource:MatTableDataSource<any> = new MatTableDataSource<any>(this.alertes);
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  newAlerte(){
    const dialogRef = this.dialog.open(EditParameterComponent,{

    }).afterClosed().subscribe((res:any)=>{
      
    })
  }
}
