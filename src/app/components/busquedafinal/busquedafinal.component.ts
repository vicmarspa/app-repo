import { Component, OnInit } from '@angular/core';
import {BusquedasService} from '../../services/busquedas.service'
import { ActivatedRoute, Router } from '@angular/router';
import {documentosShcema} from '../../models/documentos';

@Component({
  selector: 'app-busquedafinal',
  templateUrl: './busquedafinal.component.html',
  styleUrls: ['./busquedafinal.component.css']
})
export class BusquedafinalComponent implements OnInit {


  tasks = [];
  documentArea: string;
  documentSubArea: string;
  documentType: string;

  documentTitle: string;
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

      this.documentTitle = params['documentTitle'];


      this.busquedasService.getbusquedafinal(this.documentTitle)
        .subscribe(
          res => {
            this.tasks = res;
          },
          err => console.log(err)
        )
    });



  }

}
