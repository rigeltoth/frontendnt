import { NgModule } from '@angular/core';

import { DataRoutingModule } from './data-routing.module';
import { ArticlesComponent } from './components/articles/articles.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { SharedModule } from '@shared/shared.module';
import { UserComponent } from './components/user/user.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    SignupComponent,
    SigninComponent,
    UserComponent
  ],
  imports: [
    DataRoutingModule,
    SharedModule
  ]
})
export class DataModule { }
