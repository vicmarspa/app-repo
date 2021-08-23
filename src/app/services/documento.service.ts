import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})


export class DocumentoService {

  private URL = 'https://repositoriouvm.herokuapp.com/api';
  constructor(private http: HttpClient, private router: Router) { }


  createDocument(
    documentTitle: string,
    documentAuthor: string,
    documentDescription: string,
    documentRes: string,
    documentArea: string,
    documentSubArea: string,
    documentuniversityName: string,
    documentcarrerName: string,
    documentAsignaturaName: string,
    documentType: string,
    file: File
    ) {
    const fd = new FormData();
    fd.append('documentTitle', documentTitle);
    fd.append('documentAuthor', documentAuthor);
    fd.append('documentDescription', documentDescription);
    fd.append('documentRes', documentRes);
    fd.append('documentArea', documentArea);
    fd.append('documentSubArea', documentSubArea);
    fd.append('documentuniversityName', documentuniversityName);
    fd.append('documentcarrerName', documentcarrerName);
    fd.append('documentAsignaturaName', documentAsignaturaName);
    fd.append('documentType', documentType);
    fd.append('file', file);
    return this.http.post(this.URL+'/documentos', fd);
  }

  getTasksArea() {
    return this.http.get<any>(this.URL + '/tasks');
  }

  getTasksUniversity() {
    return this.http.get<any>(this.URL + '/searchuniversities');
  }

  getTasksCarrers() {
    return this.http.get<any>(this.URL + '/searchcarrers');
  }

}


