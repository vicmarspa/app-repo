import { Component, OnInit } from '@angular/core';
import {AsignaturaService} from '../../services/asignatura.service';
import {asignaturaShcema} from '../../models/asignatura';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentoService } from '../../services/documento.service'



@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent implements OnInit {


  taskUniversity = [];
  taskSelectedUniversity:string='';
  taskCarrer = [];
  taskSelectedCarrer:string='';
  tasksCarrerselection = [];





  asignatura : asignaturaShcema={
    asignaturaName: '',
    asignaturauniversityname: '',
    asignaturacarrername: '',
    asignaturaSpecification: '',
  };

  constructor(
    private asignaturaService: AsignaturaService,
    private documentoService: DocumentoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUniversities();
    this.getCarrers();
    this.onSelectUniversity(this.taskSelectedUniversity);
    this.onSelectCarrer(this.taskSelectedCarrer);
  }


  postAsignatura() {

    this.asignaturaService.addAsignatura(this.asignatura)
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




  getCarrers() {
    this.documentoService.getTasksCarrers()
    .subscribe(
      res => {
        this.taskCarrer = res;
        this.taskSelectedCarrer;
      },
      err => console.log(err)
    )
  }



  onSelectUniversity(id:string)
  {
    //ALMACENAR ESTA VARIABLE
    this.taskSelectedUniversity = id;

    this.asignatura.asignaturauniversityname = this.taskSelectedUniversity;


    var tasksCarrerselectionF = this.taskCarrer
    .filter(function(carrera){
    return carrera.carreruniversityname === id;
    })
    this.tasksCarrerselection = tasksCarrerselectionF;
  }


  onSelectCarrer(id:string)
  {
    //ALMACENAR ESTA VARIABLE
    this.taskSelectedCarrer = id;
    this.asignatura.asignaturacarrername = this.taskSelectedCarrer;
  }









}
