import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { CadastrarComponent } from './cadastrar/cadastrar.component'
import { PesquisarComponent } from './pesquisar/pesquisar.component'
  import { from } from 'rxjs';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'cadastrados/:id', component: PesquisarComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
