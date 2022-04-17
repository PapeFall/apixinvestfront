import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { ProjetsService } from 'src/app/services/projets.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles:any = [];
  projets:any = [];

  constructor(private articleService: ArticlesService, private projetService: ProjetsService) { 
    new Promise(resolve =>{
      this.scripts.forEach((script)=>this.loadScript(script))
      // this.loadScript()
    })
    this.getArticles();
    this.getProjets();
  }
  scripts = [
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.actions.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.carousel.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.migration.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.navigation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.parallax.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.video.min.js",
    'assets/apix2/js/custom.js',
    'assets/apix2/js/custom2home.js'
  ]
  public loadScript(script:string){
    const node = document.createElement('script');
    // node.src =     'assets/apix2/js/custom.js';
    node.src = script
    node.type='text/javascript';
    node.async=true;
    node.charset='utf-8';
    document.getElementsByTagName('head')[0].appendChild(node);
  }

  ngOnInit(): void {
  }

  public getArticles(){
    this.articles = this.articleService.getArticles();
    
  }

  public getProjets(){
    this.projets = this.projetService.getProjets();

  }

}
