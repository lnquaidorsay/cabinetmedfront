import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { MenuComponent } from './components/partials/menu/menu.component';
import { MasterpComponent } from './components/partials/masterp/masterp.component';
import { GestionpatientComponent } from './components/gestionpatient/gestionpatient.component';
import { GestionrdvComponent } from './components/gestionrdv/gestionrdv.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent } from './components/login/login.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { CreateRdvComponent } from './components/create-rdv/create-rdv.component';
import { EditRdvComponent } from './components/edit-rdv/edit-rdv.component';
import { DeleteRdvComponent } from './components/delete-rdv/delete-rdv.component';
import { DeletePatientComponent } from './components/delete-patient/delete-patient.component';
import { GestioncomptaComponent } from './components/gestioncompta/gestioncompta.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { Titlelevel1Component } from './components/partials/titlelevel1/titlelevel1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    MasterpComponent,
    GestionpatientComponent,
    GestionrdvComponent,
    PagenotfoundComponent,
    LoginComponent,
    EditPatientComponent,
    CreatePatientComponent,
    CreateRdvComponent,
    EditRdvComponent,
    DeleteRdvComponent,
    DeletePatientComponent,
    GestioncomptaComponent,
    CabinetComponent,
    Titlelevel1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
