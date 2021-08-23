import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private URL = 'https://repositoriouvm.herokuapp.com/api';
  constructor(private http: HttpClient, private router: Router
    

    ) { }

  getTasks() {
    return this.http.get<any>(this.URL + '/tasks');
  }

  getPrivateTasks() {
    return this.http.get<any>(this.URL + '/private-tasks');
  }

  getDocuments() {
    return this.http.get<any>(this.URL + '/inicio');
  }

  getDocumentsPrivate() {
    return this.http.get<any>(this.URL + '/documentosperfil');
  }


  deleteDocumentsPrivate(_id: string) {
    console.log('IDENTIFICADOR A ELIMINAR'+_id);
    console.log('SE ENCUENTRA EN LA SECCIÒN DE ELIMINAR'+_id);

    return this.http.delete<any>(`${this.URL}/eliminarDocumento/${_id}`);
  }



}
