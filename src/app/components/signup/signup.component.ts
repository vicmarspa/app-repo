import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user = {
    userEmail:'',
    userPass:'',
    userName:'',
    userRol:'Estudiante'
  }
  constructor(
    private authService: AuthService,
    private router: Router
    ){}
   

  ngOnInit(){

  }

  signUp() {
    this.authService.signUpUser(this.user)
    .subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigate(['/private']);
      },
      err => console.log(err)
    )
  }

}
