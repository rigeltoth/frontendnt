import { Injectable } from '@angular/core';
import { ArticleModel } from '@data/models/article.model';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  url_aticles = 'http://localhost:4000/api/articles'
  
  constructor(private http: HttpClient) { }

  getArticles(){
    return this.http.get<ArticleModel[]>(this.url_aticles)
  }

  createArticle(formArticle: NgForm){
    return this.http.post( this.url_aticles, formArticle)
  }
}
