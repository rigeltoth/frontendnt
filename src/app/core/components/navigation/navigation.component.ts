import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/auth.service';
import { ArticlesService } from '@data/services/articles.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  username: any
  constructor(
    public authService: AuthService,
    public articleService: ArticlesService
    ) { }

  ngOnInit(): void {
    Aos.init()
    this.username = this.authService.getUsername()
  }
}
