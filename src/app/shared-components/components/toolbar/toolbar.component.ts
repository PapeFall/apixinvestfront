import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router, 
    private translate: TranslateService,
    ) { }
  user :any= undefined;
  ngOnInit(): void {
    let u :any= localStorage.getItem('user');
    this.user = JSON.parse(u);

    this.useLang(localStorage.getItem('langue')!);


  }

  routeTo(url:string){
    this.router.navigate([url]);
  }

  switchLang(lang: string) {
    localStorage.setItem('langue', lang);
    this.useLang(lang);
    console.log(lang);
    
  }
  
  useLang(lang: string) {
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
  }


  deconnexion(){
    localStorage.clear();
    this.router.navigateByUrl("/");
  }
}
