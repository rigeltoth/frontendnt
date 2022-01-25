import { NgModule } from '@angular/core';

import { DataRoutingModule } from './data-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from '@shared/shared.module';
import { UserComponent } from './components/user/user.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/articles-list/article-list.component';

@NgModule({
  declarations: [
    ArticleListComponent,
    SignupComponent,
    SigninComponent,
    UserComponent,
    ArticleComponent
  ],
  imports: [
    DataRoutingModule,
    SharedModule
  ]
})
export class DataModule { }
