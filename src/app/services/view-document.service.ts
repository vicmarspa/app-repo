import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';


import { DocumentoRateShcema } from "../models/documentRate";


@Injectable({
  providedIn: 'root'
})
export class ViewDocumentService {

  private URL = 'https://repositoriouvm.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) { }

  getDocument(_id: string) {
    return this.http.get<any>(`${this.URL}/documento/${_id}`);
  }

  getDocumentProm(_id: string) {
    console.log('ESTA ES EL AREA'+_id);

    return this.http.get<any>(`${this.URL}/documentorateobtener/${_id}`);
  }


  createpostRateDocument(documentoRate) {
    return this.http.post<any>(this.URL + '/ratedoc', documentoRate);
  }


  getDocumentComment(_id: string) {
    return this.http.get<any>(`${this.URL}/documentocommentobtener/${_id}`);
  }

  createpostCommentDocument(documentoComment) {
    return this.http.post<any>(this.URL + '/commentdoc', documentoComment);
  }

  downloaddocument(_id: string) {
    return this.http.get<any>(`${this.URL}/descargardocumento/${_id}`);
  }

  getDocumentCalification(_id: string) {
    console.log('ESTA ES EL AREA'+_id);
    return this.http.get<any>(`${this.URL}/obtenercalificaciones/${_id}`);
  }


}
