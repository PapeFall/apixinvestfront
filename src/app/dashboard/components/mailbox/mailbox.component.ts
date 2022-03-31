import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailboxSendComponent } from '../mailbox-send/mailbox-send.component';

@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.scss']
})
export class MailboxComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  newMail(){
    const dialogRef = this.dialog.open(MailboxSendComponent,{

    });

    dialogRef.afterClosed().subscribe((resultat:any)=>{
      
    })
  }
}
