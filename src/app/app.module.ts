import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './top/top.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PesquisarComponent } from './pesquisar/pesquisar.component';
import { EntrarService } from './login/entrar.service';
import { AuthRotasGuard } from './guards/auth-rotas.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TopComponent,
    CadastrarComponent,
    PesquisarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    EntrarService,
    AuthRotasGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
