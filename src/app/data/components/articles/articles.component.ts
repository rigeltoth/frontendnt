import { Component, OnInit } from '@angular/core';
import { ArticleModel } from '@data/models/article.model';
import { ArticlesService } from '@data/services/articles.service';
import * as AOS from 'aos'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  searchArt = ''
  articles: ArticleModel[] = []
  filteredArticles: ArticleModel[] = []

  constructor(private articleService: ArticlesService) { }

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
    console.log(topic)
    this.filteredArticles = this.articles.filter(article => 
      article.topic.includes(topic))
  }
}
