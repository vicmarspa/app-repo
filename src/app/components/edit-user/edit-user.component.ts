import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
import { AuthService } from '../../services/auth.service'

import{ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user = {
    userEmail:'',
    userPass:'',
    userName:'',
    userRol:'user'
  }
  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  editProfile() {
    this.authService.editProfile(this.user)
    .subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/private']);
        this.toastr.success(this.user.userEmail,"Usuario Editado");
      },
      err => console.log(err)
    )
  }



}
