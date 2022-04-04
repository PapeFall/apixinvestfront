import { Injectable } from '@angular/core';
import ArticleJson from '../../assets/jsontest/articles.json';
@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles:any = ArticleJson
  constructor() { }
  getArticles(){
    return this.articles;
  }
}
