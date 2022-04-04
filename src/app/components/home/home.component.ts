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
      this.loadScript()
    })
    this.getArticles();
    this.getProjets();
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

  public getArticles(){
    this.articles = this.articleService.getArticles();
    
  }

  public getProjets(){
    this.projets = this.projetService.getProjets();

  }

}
