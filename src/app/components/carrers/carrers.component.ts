import { Component, OnInit } from '@angular/core';
import {CarrersService} from '../../services/carrers.service';
import {carrersShcema} from '../../models/carrers';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoService } from '../../services/documento.service'


@Component({
  selector: 'app-carrers',
  templateUrl: './carrers.component.html',
  styleUrls: ['./carrers.component.css']
})
export class CarrersComponent implements OnInit {


  taskUniversity = [];
  taskSelectedUniversity:string='';


  carrer : carrersShcema={
    carrerName: '',
    carreruniversityId: '',
    carreruniversityname: '',
    carrerSpecification: '',

  };

  constructor(
    private carrersService: CarrersService,
    private documentoService: DocumentoService,
    private activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.getUniversities();
    this.onSelectUniversity(this.taskSelectedUniversity);
  }


  postCarrer() {

    this.carrersService.addCarrer(this.carrer)
    .subscribe(
      res => {
        location.reload();
      },
      err => console.log(err)
    )
  }



  getUniversities() {
    this.documentoService.getTasksUniversity()
    .subscribe(
      res => {
        this.taskUniversity = res;
        this.taskSelectedUniversity;
      },
      err => console.log(err)
    )
  }

  onSelectUniversity(id:string)
  {
    //ALMACENAR ESTA VARIABLE
    this.taskSelectedUniversity = id;

    this.carrer.carreruniversityname = this.taskSelectedUniversity;
  }




}
