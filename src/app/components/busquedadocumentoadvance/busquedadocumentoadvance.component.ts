import { Component, OnInit } from '@angular/core';
import {BusquedasService} from '../../services/busquedas.service'
import { ActivatedRoute, Router } from '@angular/router';
import {documentosShcema} from '../../models/documentos';


@Component({
  selector: 'app-busquedadocumentoadvance',
  templateUrl: './busquedadocumentoadvance.component.html',
  styleUrls: ['./busquedadocumentoadvance.component.css']
})
export class BusquedadocumentoadvanceComponent implements OnInit {

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





  tasks = [];
  documentArea: string;
  documentSubArea: string;
  documentType: string;

  documentuniversityName: string;
  documentcarrerName: string;
  documentAsignaturaName: string;




  variableuno:string;


  _id: string;
  id2: string;
  id3: string;

  constructor(
    private busquedasService: BusquedasService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {



    this.activatedRoute.params.subscribe(params => {

      this.documentArea = params['documentArea'];
      this.documentSubArea = params['documentSubArea'];
      this.documentType = params['documentType'];


      this.busquedasService.getAdvance(this.documentArea,this.documentSubArea, this.documentType)
        .subscribe(
          res => {
            this.tasks = res;
          },
          err => console.log(err)
        )
    });



 

  


  }



}
