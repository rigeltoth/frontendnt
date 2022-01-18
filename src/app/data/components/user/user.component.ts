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
  articles: ArticleModel[] = []
  buffArticle: ArticleModel = {
    title: '',
    body: '',
    imgUrl: '',
    comments: '',
    topic: '',
    author: ''
  }
  /* files: any[] = [] */
  constructor(
    public authService: AuthService,
    public articleService: ArticlesService,
    ) { }

  ngOnInit(): void {
    this.user = this.authService.getUsername()
    this.getArticles()
  }

 /*  file(event: any){
    const fetchedFile = event.target.files
    this.files.push(fetchedFile)
  } */

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

  /* extractbase64 =async ($event: any) => new Promise((resolve) => {
    try {
      const unsaveImg = window.URL.createObjectURL($event)
      const image = this.sanitizer.bypassSecurityTrustUrl(unsaveImg)
      const reader = new FileReader()
      reader.readAsDataURL($event)
      reader.onload = () => {
        resolve({
          base: reader.result,
        })
      }
      reader.onerror = error => {
        resolve({
          base: null
        })
      }
    } catch (e) {
      return null
    }
  }) */
}