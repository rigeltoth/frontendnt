import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/auth.service';
import { ArticlesService } from '@data/services/articles.service';
import { ArticleModel } from '@data/models/article.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {

  user: any
  topics = ["Tecnología", "Economía", "Deportes", "Opinión", "Cultura", "Ciencia", "Política", "Salud"]
  articles: ArticleModel[] = []
  buffArticle: ArticleModel = {
    _id: '',
    title: '',
    body: '',
    imgUrl: '',
    comments: '',
    topic: '',
    author: ''
  }
  constructor(
    public authService: AuthService,
    public articleService: ArticlesService,
    ) { }

  ngOnInit(): void {
    this.user = this.authService.getUsername()
    this.buffArticle.author = this.user
    this.getArticles()
  }


  getArticles(){
    this.articleService.getArticles().subscribe(
      res => {this.articles = res},
      err => console.error(err)
      )
    }

  createArticle(formArticle: NgForm){
    this.articleService.createArticle(formArticle.value).subscribe(
      res => console.log(res),
      err => console.log(err)
      )
    }


}
