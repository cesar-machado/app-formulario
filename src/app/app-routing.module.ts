import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { FormularioComponent } from './formulario/formulario.component'
  import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
