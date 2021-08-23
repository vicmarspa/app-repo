import { Component, OnInit } from '@angular/core';
import {CalificarService} from '../../services/calificar.service';
import {calificarShcema} from '../../models/calificar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-calificar',
  templateUrl: './calificar.component.html',
  styleUrls: ['./calificar.component.css']
})
export class CalificarComponent implements OnInit {

  calificar : calificarShcema={
    evaluationDocumentId: '',
    evaluationDocumentStructure: '',
    evaluationDocumentCoherence: '',
    evaluationDocumentAuthorship: '',
    evaluationDocumentTypeOfFonts: '',
    evaluationDocumentUtility: '',
  };


  constructor(
    private calificarService: CalificarService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  postCalificar() {

    this.calificarService.addCalification(this.calificar)
    .subscribe(
      res => {
        location.reload();
      },
      err => console.log(err)
    )
  }




  calificarEstructura(id:string){

    console.log('esto es el id de la calificación',id);
    this.calificar.evaluationDocumentStructure= id;

  }

  calificarCoherencia(id:string){

    console.log('esto es el id de la calificación',id);
    this.calificar.evaluationDocumentCoherence = id;
  }



  
  calificarAutoria(id:string){

    console.log('esto es el id de la calificación',id);
    this.calificar.evaluationDocumentAuthorship = id;
  }



  

  calificarFuente(id:string){

    console.log('esto es el id de la calificación',id);
    this.calificar.evaluationDocumentTypeOfFonts = id;
  }


  

  calificarUtilidad(id:string){

    console.log('esto es el id de la calificación',id);
    this.calificar.evaluationDocumentUtility = id;
  }


}
