import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mailbox-send',
  templateUrl: './mailbox-send.component.html',
  styleUrls: ['./mailbox-send.component.scss']
})
export class MailboxSendComponent implements OnInit {
@ViewChild("file",{static:true}) file:any;
  illustration: any;

  constructor(private dialogRef:MatDialogRef<MailboxSendComponent>) { }

  onUpload(event:any){
    this.illustration = event.target.files[0]
     
  }
  
  ngOnInit(): void {
  }

}
