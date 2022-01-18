import { Component, OnInit } from '@angular/core';
import { AuthService } from '@data/services/auth.service';
import { UserSignup } from '@data/models/userSignup';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  user: UserSignup = {
    username: '',
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  signup(){
    this.authService.signup(this.user).subscribe(
      res => {console.log(res)
      localStorage.setItem('token', res.token)
      localStorage.setItem('username', res.username)
      this.router.navigate(['b/user'])},
      err => console.error(err)
    )
  }
}
