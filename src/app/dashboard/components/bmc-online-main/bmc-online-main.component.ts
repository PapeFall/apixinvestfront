import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EditPostitComponent } from '../edit-postit/edit-postit.component';

@Component({
  selector: 'app-bmc-online-main',
  templateUrl: './bmc-online-main.component.html',
  styleUrls: ['./bmc-online-main.component.scss']
})
export class BmcOnlineMainComponent implements OnInit {

  panelOpenState=false;
  bmar1:any[]=[];
  bmar2:any[]=[];
  bmar3:any[]=[];
  bmar4:any[]=[];
  bmar5:any[]=[];
  bmar6:any[]=[];
  bmar7:any[]=[];
  bmar8:any[]=[];
  bmar9:any[]=[];

  constructor(
   private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  addPostIt(tab:number){
    const dialogRef = this.dialog.open(EditPostitComponent,{
      data:{tab:tab}
    });
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result?.status){
        console.log(result);
        
        switch(result?.postIt?.tab){
          case 1: this.bmar1.push(result.postIt);break;
          case 2: this.bmar2.push(result.postIt);break;
          case 3: this.bmar3.push(result.postIt);break;
          case 4: this.bmar4.push(result.postIt);break;
          case 5: this.bmar5.push(result.postIt);break;
          case 6: this.bmar6.push(result.postIt);break;
          case 7: this.bmar7.push(result.postIt);break;
          case 8: this.bmar8.push(result.postIt);break;
          case 9: this.bmar9.push(result.postIt);break;
        }
      }
    })
  }

  editPostIt(tab:number,postIt:any){
    const dialogRef = this.dialog.open(EditPostitComponent,{
      data:{tab:tab,postIt:postIt}
    });
    dialogRef.afterClosed().subscribe((result:any)=>{
      if(result?.status){
        console.log(result);
        
        switch(result?.postIt?.tab){
          case 1: this.bmar1.push(result.postIt);break;
          case 2: this.bmar2.push(result.postIt);break;
          case 3: this.bmar3.push(result.postIt);break;
          case 4: this.bmar4.push(result.postIt);break;
          case 5: this.bmar5.push(result.postIt);break;
          case 6: this.bmar6.push(result.postIt);break;
          case 7: this.bmar7.push(result.postIt);break;
          case 8: this.bmar8.push(result.postIt);break;
          case 9: this.bmar9.push(result.postIt);break;
        }
      }
    })
  }
}
