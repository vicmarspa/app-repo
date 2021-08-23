import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrersService {



  private URL = 'https://repositoriouvm.herokuapp.com/api';


  constructor(private http: HttpClient, private router: Router) { }


  addCarrer(carrer) {
    return this.http.post<any>(this.URL + '/addcarrer', carrer);
  }



}
