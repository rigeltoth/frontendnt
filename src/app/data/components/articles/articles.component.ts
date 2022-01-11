import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '@data/models/article.model';
import { ArticlesService } from '@data/services/articles.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {

  articles: ArticleModel[] = []

  constructor(private articleService: ArticlesService) { }

  ngOnInit(): void {
    AOS.init()
    this.getArticles()
  }

  getArticles(){
    this.articleService.getArticles().subscribe(
      res => {this.articles = res},
      err => console.error(err)
    )
  }
}
