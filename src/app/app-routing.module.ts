import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



//components
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { UniversityComponent } from './components/university/university.component';
import { CarrersComponent } from './components/carrers/carrers.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { BusquedadocumentoadvanceComponent } from './components/busquedadocumentoadvance/busquedadocumentoadvance.component';
import { BusquedauniversidadComponent } from './components/busquedauniversidad/busquedauniversidad.component';
import { BusquedafinalComponent } from './components/busquedafinal/busquedafinal.component';
import { EditdocumentComponent } from './components/editdocument/editdocument.component';
import { CalificarComponent } from './components/calificar/calificar.component';





import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'private',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'editprofile',
    component: EditUserComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'documentos',
    component: DocumentoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documento/:_id',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ratedoc',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documentorateobtener/:documentRateDocId',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'commentdoc',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'documentocommentobtener/:documentCommentDocId',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'descargardocumento/:id',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'adduniversity',
    component: UniversityComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addcarrer',
    component: CarrersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'searchuniversities',
    component: CarrersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'searchcarrers',
    component: CarrersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addasignatura',
    component: AsignaturaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'searchasignatura',
    component: AsignaturaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'getadvance/:documentArea/:documentSubArea/:documentType',
    component: BusquedadocumentoadvanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'getesp/:documentuniversityName/:documentcarrerName/:documentAsignaturaName/:documentType',
    component: BusquedauniversidadComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'getsearchfinal/:documentTitle',
    component: BusquedafinalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'eliminarDocumento/:_id',
    component: PrivateTasksComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'editdocumentver/:_id',
    component: EditdocumentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'addcalification',
    component: CalificarComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'obtenercalificaciones/:evaluationDocumentId',
    component: ViewDocumentComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
