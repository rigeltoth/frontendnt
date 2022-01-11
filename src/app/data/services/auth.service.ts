import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserSignup } from '@data/models/userSignup';
import { UserSignin } from '@data/models/userSignin';
import { token } from '@data/models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url_auth = 'http://localhost:4000/auth'
  constructor(private http: HttpClient) {}

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
}
