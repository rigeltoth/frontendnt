import { Component, OnInit } from '@angular/core';
import { UserSignin } from '@data/models/userSignin';
import { AuthService } from '@data/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  user: UserSignin = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }
  signin(){
    this.authService.signin(this.user).subscribe(
      res => {console.log(res)
        localStorage.setItem('token', res.token)
        this.router.navigate(['b/user'])},
        err => console.error(err)
    )
  }
}
