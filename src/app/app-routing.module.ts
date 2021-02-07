import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionpatientComponent } from './components/gestionpatient/gestionpatient.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { CreatePatientComponent } from './components/create-patient/create-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { GestionrdvComponent } from './components/gestionrdv/gestionrdv.component';
import { EditRdvComponent } from './components/edit-rdv/edit-rdv.component';
import { GestioncomptaComponent } from './components/gestioncompta/gestioncompta.component';

const routes: Routes = [
  { path: "", redirectTo: "/patient", pathMatch: "full"},
  { path: "patient", children: [
     { path:"", component: GestionpatientComponent },
     { path:"createp", component: CreatePatientComponent},
     { path:"editp/:id", component: EditPatientComponent },
    ]
  },
  { path: "rdv", children: [
    { path:"", component: GestionrdvComponent },
    { path:"createrdv", component: CreatePatientComponent},
    { path:"editrdv/:id", component: EditRdvComponent },
   ]
 },{ path: "compta", children: [
  { path:"", component: GestioncomptaComponent },
 ]
},
  { path: "login", component: LoginComponent },
  { path: "**", component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
