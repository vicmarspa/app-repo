import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service'
import { DocumentoService } from '../../services/documento.service'
import {AsignaturaService} from '../../services/asignatura.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks = [];
  tasksBusqueda = [];
  tasksBusquedaSub = [];
  taskSelected : string = '';
  taskSelectedTipo : string = '';
  taskSelectedTipo2 : string = '';
  taskSelectedSub : string = '';
  taskCarrer = [];
  tasksCarrerselection = [];
  taskSelectedUniversity:string='';
  taskUniversity = [];
  taskSelectedCarrer:string='';

  taskAsignatura = [];
  tasksAsignaturaselection = [];
  taskSelectedAsignatura:string='';

  constructor(
    private taskService: TaskService,
    private documentoService: DocumentoService,
    private asignaturaService: AsignaturaService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {

    this.taskService.getDocuments()
      .subscribe(
        res => {
          this.tasks = res;
        },
        err => console.log(err)
      )

      this.editProfile();
      this.onSelect2(this.taskSelected);


      this.getUniversities();
      this.getCarrers();
      this.getAsignatura();

  }



  editProfile() {
    this.documentoService.getTasksArea()
      .subscribe(
        res => {
          this.tasksBusqueda = res;
          console.log(this.tasksBusqueda+'dsadsadsadsa');
          this.taskSelected;
        },
        err => console.log(err)
      )
  }





  onSelect2(id:string)
  {

    
        if(id=='CIENCIAS NATURALES'){
          console.log('id->', id)
          this.tasksBusquedaSub  = this.Primera_ciencia;
          console.log(this.Primera_ciencia);
          this.taskSelectedSub;
          console.log('id->', this.taskSelectedSub)
        }if(id=='INGENIERÍA Y TECNOLOGÍA'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Segunda_ciencia;
          console.log(this.Segunda_ciencia);
          this.taskSelectedSub;
        }
        if(id=='CIENCIAS MÉDICA Y DE LA SALUD'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Tercera_ciencia;
          console.log(this.Tercera_ciencia);
          this.taskSelectedSub;
        }
        if(id=='CIENCIAS AGRÍCOLAS'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Cuarta_ciencia;
          console.log(this.Cuarta_ciencia);
          this.taskSelectedSub;
        }
        if(id=='CIENCIAS SOCIALES'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Quinta_ciencia;
          console.log(this.Quinta_ciencia);
          this.taskSelectedSub;
        }
        if(id=='HUMANIDADES'){
        console.log('id->', id)
        this.tasksBusquedaSub = this.Sexta_ciencia;
        console.log(this.Sexta_ciencia);
        this.taskSelectedSub;
        }
      err => console.log(err)
  }



  onSelectSub(id:string)
  {
    console.log('id->', id);

    this.taskSelectedSub=id;
    
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

  getAsignatura() {
    this.asignaturaService.getTasksAsignatura()
    .subscribe(
      res => {
        this.taskAsignatura = res;
        this.taskSelectedAsignatura;
      },
      err => console.log(err)
    )
  }



  onSelectUniversity(id:string)
  {
    //ALMACENAR ESTA VARIABLE
    this.taskSelectedUniversity = id;

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

    var tasksAsignaturaselectionF = this.taskAsignatura
    .filter(function(asignatura){
    return asignatura.asignaturacarrername === id;
    })
    //colocar restricción para asignatura y carrera
    this.tasksAsignaturaselection = tasksAsignaturaselectionF;

  }


  onSelectAsignatura(id:string)
  {
    //ALMACENAR ESTA VARIABLE
    this.taskSelectedAsignatura = id;
    console.log('id='+this.taskSelectedAsignatura)
  }
































  Primera_ciencia= 
  [
    //Ciencias naturales
    {
      _idciencia: '1',
      nameciencia: 'MATEMÁTICAS ',
        
    },
    {
      _idciencia: '2',
      nameciencia: "COMPUTACIÓN Y CIENCIAS DE LA INFORMACIÓN ",

    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS FÍSICAS  ",

    },
    {
      _idciencia: '4',
      nameciencia: "CIENCIAS QUÍMICAS ",

    },
    {
      _idciencia: '5',
      nameciencia: "CIENCIAS DE LA TIERRA Y MEDIOAMBIENTALES ",
    },    
    {
      _idciencia: '6',
      nameciencia: "CIENCIAS BIOLÓGICAS ",

    },
    {
      _idciencia: '7',
      nameciencia: "OTRAS CIENCIAS NATURALES ",

    },

  ];

  Segunda_ciencia= 
  [
    //ingenieria y tecnología
    {
      _idciencia: '1',
      nameciencia: 'INGENIERÍA CIVIL',
    },
    {
      _idciencia: '2',
      nameciencia: "INGENIERÍA ELÉCTRICA, ELECTRÓNICA E INFORMÁTICA",
    },
    {
      _idciencia: '3',
      nameciencia: "INGENIERÍA MECÁNICA",
    },
    {
      _idciencia: '4',
      nameciencia: "INGENIERÍA QUÍMICA",
    },
    {
      _idciencia: '5',
      nameciencia: "INGENIERÍA DE LOS MATERIALES",
    },
    {
      _idciencia: '6',
      nameciencia: "INGENIERÍA MÉDICA",
    },
    {
      _idciencia: '7',
      nameciencia: "INGENIERÍA AMBIENTAL",
    },
    {
      _idciencia: '8',
      nameciencia: "BIOTECNOLOGÍA AMBIENTAL",
    },
    {
      _idciencia: '9',
      nameciencia: "BIOTECNOLOGÍA INDUSTRIAL ",
    },
    {
      _idciencia: '10',
      nameciencia: "NANOTECNOLOGÍA",
    },
    {
      _idciencia: '11',
      nameciencia: "OTRAS INGENIERÍAS Y TECNOLOGÍAS",
    },
  ];

  Tercera_ciencia= 
  [
    //ciencia medica y de la salud
    {
      _idciencia: '1',
      nameciencia: 'MEDICINA BÁSICA',

    },
    {
      _idciencia: '2',
      nameciencia: "MEDICINA CLÍNICA",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS DE LA SALUD",
    },
    {
      _idciencia: '4',
      nameciencia: "BIOTECNOLOGÍA MÉDICA",
    },
    {
      _idciencia: '5',
      nameciencia: "OTRAS CIENCIAS MÉDICAS",
    },
  ];

  Cuarta_ciencia= 
  [
    //ciencias agricolas
    {
      _idciencia: '1',
      nameciencia: 'AGRICULTURA, SILVICULTURA Y PESCA ',
    },
    {
      _idciencia: '2',
      nameciencia: "CIENCIAS ANIMALES Y LÁCTEOS",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS VETERINARIAS ",
    },
    {
      _idciencia: '4',
      nameciencia: "BIOTECNOLOGÍA AGRÍCOLA",
    },
    {
      _idciencia: '5',
      nameciencia: "OTRAS CIENCIAS AGRÍCOLAS",
    },
  ];

  Quinta_ciencia= 
  [
    //ciencias sociales
    {
      _idciencia: '1',
      nameciencia: 'PSICOLOGÍA',
    },
    {
      _idciencia: '2',
      nameciencia: "ECONOMÍA Y NEGOCIOS",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS DE LA EDUCACIÓN",
    },
    {
      _idciencia: '4',
      nameciencia: "SOCIOLOGÍA",
    },
    {
      _idciencia: '5',
      nameciencia: "DERECHO",
    },
    {
      _idciencia: '6',
      nameciencia: "CIENCIAS POLÍTICAS ",
    },
    {
      _idciencia: '7',
      nameciencia: "GEOGRAFÍA SOCIAL Y ECONÓMICA ",
    },
    {
      _idciencia: '8',
      nameciencia: "PERIODISMO Y COMUNICACIONES",
    },
    {
      _idciencia: '9',
      nameciencia: "OTRAS CIENCIAS SOCIALES",
    },

  ];

  Sexta_ciencia= 
  [
    //humanidades
    {
      _idciencia: '1',
      nameciencia: 'HISTORIA Y ARQUEOLOGÍA ',
    },
    {
      _idciencia: '2',
      nameciencia: "IDIOMAS Y LITERATURA",
    },
    {
      _idciencia: '3',
      nameciencia: "FILOSOFÍA, ÉTICA Y RELIGIÓN ",
    },
    {
      _idciencia: '4',
      nameciencia: "ARTE",
    },
    {
      _idciencia: '5',
      nameciencia: "OTRAS HUMANIDADES",
    },
  ];






}
