import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-campagne',
  templateUrl: './new-campagne.component.html',
  styleUrls: ['./new-campagne.component.scss']
})
export class NewCampagneComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewCampagneComponent>) { }

  ngOnInit(): void {
  }

}
