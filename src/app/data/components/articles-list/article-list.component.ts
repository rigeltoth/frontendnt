import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleModel } from '@data/models/article.model';
import { ArticlesService } from '@data/services/articles.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-articles',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  searchArt = ''
  articles: ArticleModel[] = []
  filteredArticles: ArticleModel[] = []

  constructor(
    private articleService: ArticlesService,
    private router: Router) { }

  ngOnInit(): void {
    AOS.init()
    this.getArticles()
  }

  getArticles(){
    this.articleService.getArticles().subscribe(
      res => {
        this.articles = res
        this.filteredArticles = res},
      err => console.error(err)
    )
  }
  searchArticle(){
    this.filteredArticles = this.articles.filter(article =>
      (article.title.toLowerCase().includes(this.searchArt.toLowerCase()) ||
      article.body.toLowerCase().includes(this.searchArt.toLowerCase())) ||
      article.topic.toLowerCase().includes(this.searchArt.toLowerCase()))
    }
  searchByTopic(topic: string){
    this.filteredArticles = this.articles.filter(article =>
      article.topic.includes(topic))
  }
  getArticleId(id: string){
    this.articleService.articleId = id
    this.router.navigate(['b/article'])
  }
}
