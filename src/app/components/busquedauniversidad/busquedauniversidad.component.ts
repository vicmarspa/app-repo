import { Component, OnInit } from '@angular/core';
import {BusquedasService} from '../../services/busquedas.service'
import { ActivatedRoute, Router } from '@angular/router';
import {documentosShcema} from '../../models/documentos';

@Component({
  selector: 'app-busquedauniversidad',
  templateUrl: './busquedauniversidad.component.html',
  styleUrls: ['./busquedauniversidad.component.css']
})
export class BusquedauniversidadComponent implements OnInit {

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
    private activatedRoute: ActivatedRoute,) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {

      this.documentuniversityName = params['documentuniversityName'];
      this.documentcarrerName = params['documentcarrerName'];
      this.documentAsignaturaName = params['documentAsignaturaName'];
      this.documentType = params['documentType'];

      console.log('esto son los datos que debe tomar'+this.documentuniversityName,this.documentcarrerName)

      this.busquedasService.getEsp(this.documentuniversityName, this.documentcarrerName, this.documentAsignaturaName, this.documentType)
        .subscribe(
          res => {
            this.tasks = res;
          },
          err => console.log(err)
        )
    });


  }

}
