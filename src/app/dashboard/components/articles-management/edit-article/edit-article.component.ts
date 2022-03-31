import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  @ViewChild("file",{static:true}) file: any;
  @ViewChild("img",{static:true}) img: any;

  constructor() { }

  illustration:any= null;

  onUpload(event:any){
    this.illustration = event.target.files[0]
    console.log(this.illustration);
    this.img.src = URL.createObjectURL(this.illustration);
    
    
  }
  ngOnInit(): void {
  }

}
