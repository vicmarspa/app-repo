import { Component, OnInit } from '@angular/core';
import {ViewDocumentService} from '../../services/view-document.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import {documentosShcema} from '../../models/documentos';
import { DocumentoService } from '../../services/documento.service'
import {AsignaturaService} from '../../services/asignatura.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}



@Component({
  selector: 'app-editdocument',
  templateUrl: './editdocument.component.html',
  styleUrls: ['./editdocument.component.css']
})
export class EditdocumentComponent implements OnInit {
 
 
  _id: string;
  photoSelected: string | ArrayBuffer;
  file: File;
  taskSelected:string = '';
  taskSelected2:string = '';
  taskSelectedUniversity:string='';
  taskSelectedCarrer:string='';
  taskSelectedAsignatura:string='';
  documentTypeSelected:string='Documento';
  documentSubArea='';
  carrerSelection='';
  universitySelection='';
  taskUniversity = [];
  taskCarrer = [];
  taskAsignatura = [];
  tasksCarrerselection = [];
  tasksAsignaturaselection = [];
  tasks = []
  tasks2 = [];
  multipleImages = [];

 
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

  constructor(
    private viewDocumentService: ViewDocumentService,

    private documentoService: DocumentoService,
    private asignaturaService: AsignaturaService,


    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {


    this.activatedRoute.params.subscribe(params => {
      this._id = params['_id'];
      console.log('esto es el id dentro del editar'+this._id)

      this.viewDocumentService.getDocument(this._id)
        .subscribe(
          res => {
          this.documento = res;
          this.taskSelected = this.documento.documentArea;
          this.taskSelected2 = this.documento.documentSubArea;
          console.log('ESTO ES EL TASK SELECTED'+this.taskSelected);
          console.log('ESTO ES EL TASK SELECTED NUMERO 2'+this.taskSelected2)

          console.log(this.documento);
        },
          err => console.log(err)
        )
    });

    
    this.editProfile();
    this.onSelect2(this.taskSelected);
    this.getUniversities();
    this.getCarrers();
    this.getAsignatura();
    this.onSelectUniversity(this.taskSelectedUniversity);
    this.onSelectCarrer(this.taskSelectedCarrer);


  }








  selectMultipleImage(event){
    if (event.target.files.length > 0) {
      this.multipleImages = event.target.files;
    }
  }



  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = <File>event.target.files[0];

    }
  }


  //documentSubArea
  uploadDocument(documentTitle: HTMLInputElement, documentAuthor: HTMLInputElement, documentDescription: HTMLTextAreaElement ,documentRes: HTMLTextAreaElement, documentArea: HTMLOptionElement,) {
    this.documentoService
      .createDocument(documentTitle.value, documentAuthor.value, documentDescription.value, documentRes.value,documentArea.value, this.documentSubArea, this.taskSelectedUniversity, this.taskSelectedCarrer, this.taskSelectedAsignatura, this.documentTypeSelected, this.file)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/tasks'])
        },
        err => console.log(err)
      );
    return false;
  }



  editProfile() {
    this.documentoService.getTasksArea()
      .subscribe(
        res => {
          this.tasks = res;
          console.log(this.tasks+'dsadsadsadsa');
          this.taskSelected;
        },
        err => console.log(err)
      )
  }


  onSelect(nameciencia:any):void{
    console.log('id->', nameciencia);
    this.documentSubArea = nameciencia;
    console.log(this.documentSubArea);
  }

  getCiencias(){
    return this.Primera_ciencia;
  }

  onSelect2(id:string)
  {
        if(id=='CIENCIAS NATURALES'){
          console.log('id->', id)
          this.tasks2  = this.Primera_ciencia;
          console.log(this.Primera_ciencia);
          this.taskSelected2;
          console.log('id->', this.taskSelected2)
        }if(id=='INGENIERÍA Y TECNOLOGÍA'){
          console.log('id->', id)
          this.tasks2 = this.Segunda_ciencia;
          console.log(this.Segunda_ciencia);
          this.taskSelected2;
        }
        if(id=='CIENCIAS MÉDICA Y DE LA SALUD'){
          console.log('id->', id)
          this.tasks2 = this.Tercera_ciencia;
          console.log(this.Tercera_ciencia);
          this.taskSelected2;
        }
        if(id=='CIENCIAS AGRÍCOLAS'){
          console.log('id->', id)
          this.tasks2 = this.Cuarta_ciencia;
          console.log(this.Cuarta_ciencia);
          this.taskSelected2;
        }
        if(id=='CIENCIAS SOCIALES'){
          console.log('id->', id)
          this.tasks2 = this.Quinta_ciencia;
          console.log(this.Quinta_ciencia);
          this.taskSelected2;
        }
        if(id=='HUMANIDADES'){
        console.log('id->', id)
        this.tasks2 = this.Sexta_ciencia;
        console.log(this.Sexta_ciencia);
        this.taskSelected2;
        }
      err => console.log(err)
  }

////////////
////
////ESTO SIRVE PARA LLAMAR A LAS UNIVERSIDADES Y CARRERAS
////////////
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





  onSelectSub(id:string)
  {
    console.log('id->', id);

    this.documentTypeSelected=id;
    
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
