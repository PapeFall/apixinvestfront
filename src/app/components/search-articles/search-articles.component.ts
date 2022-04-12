import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.scss']
})
export class SearchArticlesComponent implements OnInit {
  articles:any;

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    this.articles = this.articleService.getArticles();

  }

}
