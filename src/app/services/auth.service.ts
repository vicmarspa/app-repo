import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://repositoriouvm.herokuapp.com/api';
  constructor(private http: HttpClient, private router: Router) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user) {  
    return this.http.post<any>(this.URL + '/signin', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  editProfile(user) {
    return this.http.put(this.URL + '/editprofile', user);
  }


}
