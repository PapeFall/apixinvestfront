import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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
