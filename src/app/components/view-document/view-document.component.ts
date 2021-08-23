import { Component, OnInit } from '@angular/core';
import {ViewDocumentService} from '../../services/view-document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
//import {documentosShcema} from '../../../../../server/src/models/documentos';
import {documentosShcema} from '../../models/documentos';
import {DocumentoRateShcema} from '../../models/documentRate';
import {DocumentoCommentShcema} from '../../models/documentComment';

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css'],



  styles: [`
    .star {
      font-size: 4rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]




})
export class ViewDocumentComponent implements OnInit {

  starRating=0;
  promediorate: any=[];
  allcomment: any=[];


  calificationProm: any=[];

  

  documento : documentosShcema={
    documentTitle:'',
    documentAuthor:'',
    documentDescription:'',
    documentRes:'',
    documentArea:'',
    documentSubArea:'',
    documentUser:'',
    documentDate: Date,
    documentType:'',
    documentUrl:'',
  };



  documentoRate : DocumentoRateShcema={
    documentRateUserId: '',
    documentRateDocId: '',
    documentDate: Date,
    documentRate: 0,
  };


  documentoComment : DocumentoCommentShcema={
    documentCommentUserId: '',
    documentCommentDocId: '',
    documentDate: Date,
    documentComment: '',
  };




  _id: string;
 
  url: string;
  url2: string ='https://repositoriouvm.herokuapp.com/api/descargardocumento/';


  constructor(
    private viewDocumentService: ViewDocumentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {


    this.activatedRoute.params.subscribe(params => {
      this._id = params['_id'];
      console.log('esto es el id'+this._id)

      this.viewDocumentService.getDocument(this._id)
        .subscribe(
          res => {
          this.documento = res;
          console.log(this.documento);
        },
          err => console.log(err)
        )
    });


    this.activatedRoute.params.subscribe(params => {
      this._id = params['_id'];
      this.viewDocumentService.getDocumentProm(this._id)
        .subscribe(
          res => {

          this.promediorate = res;
          console.log(this.promediorate);

        },


          err => console.log(err)
        )
    });




    
    this.activatedRoute.params.subscribe(params => {
      this._id = params['_id'];
      this.viewDocumentService.getDocumentComment(this._id)
        .subscribe(
          res => {

          this.allcomment = res;
          console.log(this.allcomment);

        },


          err => console.log(err)
        )
    });










    this.activatedRoute.params.subscribe(params => {
      this._id = params['_id'];
      this.viewDocumentService.getDocumentCalification(this._id)
        .subscribe(
          res => {

          this.calificationProm = res;
          console.log(this.calificationProm);

        },


          err => console.log(err)
        )
    });














  



  }



public sumarate(){
  return this.promediorate.map(row => row.documentRate).reduce((a,b)=>a+b, 0);
}

public cantRate(){
  return this.promediorate.map(row => row.documentRate).reduce((a)=>a+1, 0);
}



public sumCalificationStructure(){
  return this.calificationProm.map(row => row.evaluationDocumentStructure).reduce((a,b)=>a+b, 0);
}


public sumacalificationCoherence(){
  return this.calificationProm.map(row => row.evaluationDocumentCoherence).reduce((a,b)=>a+b, 0);
}

public sumacalificationAutorship(){
  return this.calificationProm.map(row => row.evaluationDocumentAuthorship).reduce((a,b)=>a+b, 0);
}

public sumacalificationFont(){
  return this.calificationProm.map(row => row.evaluationDocumentTypeOfFonts).reduce((a,b)=>a+b, 0);
}

public sumacalificationUtility(){
  return this.calificationProm.map(row => row.evaluationDocumentTypeOfFonts).reduce((a,b)=>a+b, 0);
}







public cantCalificationStructure(){
  return this.calificationProm.map(row => row.evaluationDocumentStructure).reduce((a)=>a+1, 0);
}


public cantcalificationCoherence(){
  return this.calificationProm.map(row => row.evaluationDocumentCoherence).reduce((a)=>a+1, 0);
}

public cantcalificationAutorship(){
  return this.calificationProm.map(row => row.evaluationDocumentAuthorship).reduce((a)=>a+1, 0);
}

public cantcalificationFont(){
  return this.calificationProm.map(row => row.evaluationDocumentTypeOfFonts).reduce((a)=>a+1, 0);
}

public cantcalificationUtility(){
  return this.calificationProm.map(row => row.evaluationDocumentTypeOfFonts).reduce((a)=>a+1, 0);
}










evaluationDocumentUtility
postRatedocument() {
  this.documentoRate.documentRate=this.starRating,
  this.documentoRate.documentRateDocId=this._id,
  this.viewDocumentService.createpostRateDocument(this.documentoRate)
  .subscribe(
    res => {

      console.log(res+'DSADSA');
      location.reload();
    },
    err => console.log(err)
  )
}



postCommentdocument() {
  this.documentoComment.documentCommentDocId=this._id,
  this.viewDocumentService.createpostCommentDocument(this.documentoComment)
  .subscribe(
    res => {
      location.reload();
    },
    err => console.log(err)
  )
}






downloaddocument(a:any){

    this.url = a;
    this.viewDocumentService.downloaddocument(this.url)
      .subscribe(
        res => {
          this.router.navigate(['https://repositoriouvm.herokuapp.com/api/descargardocumento/'+a]);

        this.promediorate = res;
        console.log('dsadsadsadsa'+this.promediorate);
      },
        err => console.log(err)
      )

}




descargar(a:any){
  window.location.href='https://repositoriouvm.herokuapp.com/api/descargardocumento/'+a;
}














}
