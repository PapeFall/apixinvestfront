import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.scss']
})
export class DetailArticleComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,private articleService: ArticlesService) {
    new Promise(resolve =>{
      this.scripts.forEach((script)=>this.loadScript(script))
      // this.loadScript()
    })
   }
  article:any;
  articles:any;
  articlesRecommandes:any;
  categorie:any;
  stars = [false, false, false, false, false];

  initNote() {
    this.stars = [false, false, false, false, false];
  }
  noter(index: number) {
    this.initNote();
    for (let i = 0; i <= index; i++) {
      this.stars[i] = true;
      console.log(this.stars);

    }
  }
  ngOnInit(): void {
    this.articles = this.articleService.getArticles();
    this.activateRoute.params.subscribe((params)=>{
      this.categorie = params['categorie'];
      const index = params['id'];
      switch(this.categorie){
        case 'porteur': 
          this.article = this.articles?.porteur.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.articlesRecommandes= this.articles.porteur.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
        break;
        case 'investisseur': 
          this.article = this.articles?.investisseur.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.articlesRecommandes= this.articles.investisseur.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
        break;
        case 'partenariat': 
          this.article = this.articles?.partenariat.filter((v:any,i:any,arr:any)=>{
            return v.id==index
          })[0];
          this.articlesRecommandes= this.articles.partenariat.filter((v:any,i:any,arr:any)=>{
            return v.id!=index
          })
        break;
      }
    })
  }
 
  scripts = [
    'assets/apix2/js/custom.js',
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.actions.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.carousel.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.migration.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.navigation.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.parallax.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js",
  
    "assets/apix2/js/revolution-slider/js/extensions/revolution.extension.video.min.js",
    
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
}
