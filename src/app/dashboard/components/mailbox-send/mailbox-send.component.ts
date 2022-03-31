import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mailbox-send',
  templateUrl: './mailbox-send.component.html',
  styleUrls: ['./mailbox-send.component.scss']
})
export class MailboxSendComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<MailboxSendComponent>) { }

  ngOnInit(): void {
  }

}
