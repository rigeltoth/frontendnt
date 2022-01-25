import { Component, Input, OnInit } from '@angular/core';
import { ArticleModel } from '@data/models/article.model';
import { ArticlesService } from '@data/services/articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleSelected: ArticleModel = {
    _id: '',
    title: '',
    body: '',
    imgUrl: '',
    comments: '',
    topic: '',
    author: ''
  }
  constructor(public articleService: ArticlesService) { }

  ngOnInit(): void {
    this.getArticleById()
  }

  getArticleById(){
    this.articleService.getArticleById().subscribe(
      res => {this.articleSelected = res},
      err => console.error(err)
    )
  }
}
