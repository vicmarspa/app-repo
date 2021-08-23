import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  private URL = 'https://repositoriouvm.herokuapp.com/api';



  constructor(private http: HttpClient, private router: Router) { }


  addAsignatura(asignatura) {
    return this.http.post<any>(this.URL + '/addasignatura', asignatura);
  }



  getTasksAsignatura() {
    return this.http.get<any>(this.URL + '/searchasignatura');
  }

}
