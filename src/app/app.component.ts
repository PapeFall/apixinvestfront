import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apixinvestfront';

  constructor(private translateService: TranslateService){
    this.setDefaultLang();
  }

  private setDefaultLang() {
    this.translateService.addLangs(['en', 'fr']); // array of available langs
    this.translateService.setDefaultLang('fr');
  }

  onActivate(event:any){
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    })
  }
}
