import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }
  user :any= undefined;
  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);
    
  }

  routeTo(url:string){
    this.router.navigate([url]);
  }

  deconnexion(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
