import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';

//servicios
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import{ToastrModule, ToastrService} from 'ngx-toastr';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { DocumentoComponent } from './components/documento/documento.component';
import { ViewDocumentComponent } from './components/view-document/view-document.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UniversityComponent } from './components/university/university.component';
import { CarrersComponent } from './components/carrers/carrers.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { BusquedadocumentoadvanceComponent } from './components/busquedadocumentoadvance/busquedadocumentoadvance.component';
import { BusquedauniversidadComponent } from './components/busquedauniversidad/busquedauniversidad.component';
import { BusquedafinalComponent } from './components/busquedafinal/busquedafinal.component';
import { EditdocumentComponent } from './components/editdocument/editdocument.component';
import { CalificarComponent } from './components/calificar/calificar.component';




@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    PrivateTasksComponent,
    TasksComponent,
    EditUserComponent,
    DocumentoComponent,
    ViewDocumentComponent,
    UniversityComponent,
    CarrersComponent,
    AsignaturaComponent,
    BusquedadocumentoadvanceComponent,
    BusquedauniversidadComponent,
    BusquedafinalComponent,
    EditdocumentComponent,
    CalificarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule
  
  
  ],
  providers: [
    ToastrService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
