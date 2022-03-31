import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-projet',
  templateUrl: './detail-projet.component.html',
  styleUrls: ['./detail-projet.component.scss']
})
export class DetailProjetComponent implements OnInit {

  stars = [false,false,false,false,false]
  constructor() { }

  initNote(){
    this.stars = [false,false,false,false,false];
  }
  noter(index:number){
    this.initNote();
    for(let i = 0; i <= index; i++){
      this.stars[i]=true;
      console.log(this.stars);
      
    }
  }
  ngOnInit(): void {
  }

}
