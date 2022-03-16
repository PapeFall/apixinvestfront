import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { 
    new Promise(resolve =>{
      this.loadScript()
    })
  }

  public loadScript(){
    const node = document.createElement('script');
    node.src = 'assets/js/custom.js';
    node.type='text/javascript';
    node.async=true;
    node.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }


  ngOnInit(): void {
  }

}
