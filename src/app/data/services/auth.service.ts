import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserSignup } from '@data/models/userSignup';
import { UserSignin } from '@data/models/userSignin';
import { token } from '@data/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_auth = 'http://localhost:4000/api/auth'
  constructor(
    private http: HttpClient,
    private router:Router
    ) {}

  signup(user: UserSignup){
    return this.http.post<token>(this.url_auth + '/signup', user)
  }

  signin(user: UserSignin){
    return this.http.post<token>(this.url_auth + '/signin', user)
  }

  loggedin(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('username')
    this.router.navigate(['b/signin'])
  }

  getUsername(){
    return localStorage.getItem('username')
  }
}
