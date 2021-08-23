import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BusquedasService {
  private URL = 'https://repositoriouvm.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAdvance(documentArea: string, documentSubArea: string, documentType: string) {
    return this.http.get<any>(`${this.URL}/getadvance/${documentArea}&&${documentSubArea}&&${documentType}`);
  }
  
  getEsp(documentuniversityName: string, documentcarrerName: string, documentAsignaturaName: string, documentType: string) {
    return this.http.get<any>(`${this.URL}/getesp/${documentuniversityName}&&${documentcarrerName}&&${documentAsignaturaName}&&${documentType}`);
  }
  getbusquedafinal(documentTitle: string) {
    return this.http.get<any>(`${this.URL}/getsearchfinal/${documentTitle}`);
  }


  getDocument(_id: string, id2:string) {

    console.log('PRIMERO'+_id);
    console.log('segundo'+id2);

    return this.http.get<any>(`${this.URL}/documentos/${_id}`);
  }


}
