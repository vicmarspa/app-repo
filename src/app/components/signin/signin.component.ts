import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

import{ToastrService} from 'ngx-toastr';





@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    userEmail:'',
    userPass:''
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.signInUser(this.user)
      .subscribe(
        res => {
          console.log(res);
          localStorage.setItem('token', res.token);
          this.router.navigate(['/private']);
          this.toastr.success(this.user.userEmail,"Hola Bienvenido!");
        },

        err => this.toastr.warning("Contraseña o usuario erróneo","Validación Errónea")
        
      )
  }

}
