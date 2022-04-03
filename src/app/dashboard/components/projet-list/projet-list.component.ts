import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommentsComponent } from 'src/app/shared-components/components/comments/comments.component';
import { ParticipationPopupComponent } from 'src/app/shared-components/components/participation-popup/participation-popup.component';

@Component({
  selector: 'app-projet-list',
  templateUrl: './projet-list.component.html',
  styleUrls: ['./projet-list.component.scss']
})
export class ProjetListComponent implements OnInit {
  user: any = undefined;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
  }

  openComments(){
    const dialogRef = this.dialog.open(CommentsComponent,{
      height:'99%',
      width:'100%'
    });
  }

  participer(){
    const dialog = this.dialog.open(ParticipationPopupComponent,{

    }).afterClosed().subscribe((resp:any)=>{
      
    })
  }
}
