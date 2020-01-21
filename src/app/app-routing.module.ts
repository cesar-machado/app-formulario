import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component'
import { HomeComponent } from './home/home.component'
import { CadastrarComponent } from './cadastrar/cadastrar.component'
import { PesquisarComponent } from './pesquisar/pesquisar.component'
  import { from } from 'rxjs';
import { AuthRotasGuard } from './guards/auth-rotas.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthRotasGuard]},
  { path: 'cadastrar', component: CadastrarComponent, canActivate: [AuthRotasGuard] },
  { path: 'cadastrados', component: PesquisarComponent, canActivate: [AuthRotasGuard]  },
  { path: 'cadastrados/:id', component: PesquisarComponent, canActivate: [AuthRotasGuard] }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
