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
        }if(id=='INGENIER??A Y TECNOLOG??A'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Segunda_ciencia;
          console.log(this.Segunda_ciencia);
          this.taskSelectedSub;
        }
        if(id=='CIENCIAS M??DICA Y DE LA SALUD'){
          console.log('id->', id)
          this.tasksBusquedaSub = this.Tercera_ciencia;
          console.log(this.Tercera_ciencia);
          this.taskSelectedSub;
        }
        if(id=='CIENCIAS AGR??COLAS'){
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
    //colocar restricci??n para asignatura y carrera
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
      nameciencia: 'MATEM??TICAS ',
        
    },
    {
      _idciencia: '2',
      nameciencia: "COMPUTACI??N Y CIENCIAS DE LA INFORMACI??N ",

    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS F??SICAS  ",

    },
    {
      _idciencia: '4',
      nameciencia: "CIENCIAS QU??MICAS ",

    },
    {
      _idciencia: '5',
      nameciencia: "CIENCIAS DE LA TIERRA Y MEDIOAMBIENTALES ",
    },    
    {
      _idciencia: '6',
      nameciencia: "CIENCIAS BIOL??GICAS ",

    },
    {
      _idciencia: '7',
      nameciencia: "OTRAS CIENCIAS NATURALES ",

    },

  ];

  Segunda_ciencia= 
  [
    //ingenieria y tecnolog??a
    {
      _idciencia: '1',
      nameciencia: 'INGENIER??A CIVIL',
    },
    {
      _idciencia: '2',
      nameciencia: "INGENIER??A EL??CTRICA, ELECTR??NICA E INFORM??TICA",
    },
    {
      _idciencia: '3',
      nameciencia: "INGENIER??A MEC??NICA",
    },
    {
      _idciencia: '4',
      nameciencia: "INGENIER??A QU??MICA",
    },
    {
      _idciencia: '5',
      nameciencia: "INGENIER??A DE LOS MATERIALES",
    },
    {
      _idciencia: '6',
      nameciencia: "INGENIER??A M??DICA",
    },
    {
      _idciencia: '7',
      nameciencia: "INGENIER??A AMBIENTAL",
    },
    {
      _idciencia: '8',
      nameciencia: "BIOTECNOLOG??A AMBIENTAL",
    },
    {
      _idciencia: '9',
      nameciencia: "BIOTECNOLOG??A INDUSTRIAL ",
    },
    {
      _idciencia: '10',
      nameciencia: "NANOTECNOLOG??A",
    },
    {
      _idciencia: '11',
      nameciencia: "OTRAS INGENIER??AS Y TECNOLOG??AS",
    },
  ];

  Tercera_ciencia= 
  [
    //ciencia medica y de la salud
    {
      _idciencia: '1',
      nameciencia: 'MEDICINA B??SICA',

    },
    {
      _idciencia: '2',
      nameciencia: "MEDICINA CL??NICA",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS DE LA SALUD",
    },
    {
      _idciencia: '4',
      nameciencia: "BIOTECNOLOG??A M??DICA",
    },
    {
      _idciencia: '5',
      nameciencia: "OTRAS CIENCIAS M??DICAS",
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
      nameciencia: "CIENCIAS ANIMALES Y L??CTEOS",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS VETERINARIAS ",
    },
    {
      _idciencia: '4',
      nameciencia: "BIOTECNOLOG??A AGR??COLA",
    },
    {
      _idciencia: '5',
      nameciencia: "OTRAS CIENCIAS AGR??COLAS",
    },
  ];

  Quinta_ciencia= 
  [
    //ciencias sociales
    {
      _idciencia: '1',
      nameciencia: 'PSICOLOG??A',
    },
    {
      _idciencia: '2',
      nameciencia: "ECONOM??A Y NEGOCIOS",
    },
    {
      _idciencia: '3',
      nameciencia: "CIENCIAS DE LA EDUCACI??N",
    },
    {
      _idciencia: '4',
      nameciencia: "SOCIOLOG??A",
    },
    {
      _idciencia: '5',
      nameciencia: "DERECHO",
    },
    {
      _idciencia: '6',
      nameciencia: "CIENCIAS POL??TICAS ",
    },
    {
      _idciencia: '7',
      nameciencia: "GEOGRAF??A SOCIAL Y ECON??MICA ",
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
      nameciencia: 'HISTORIA Y ARQUEOLOG??A ',
    },
    {
      _idciencia: '2',
      nameciencia: "IDIOMAS Y LITERATURA",
    },
    {
      _idciencia: '3',
      nameciencia: "FILOSOF??A, ??TICA Y RELIGI??N ",
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
