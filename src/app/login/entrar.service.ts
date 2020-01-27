import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from 'events';



@Injectable({
  providedIn: 'root'
})
export class EntrarService {

  private usuarioAutenticado: boolean = false;



  usuario: Usuario
  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === "cesar" && usuario.senha === "123456" ) {

      this.usuarioAutenticado = true
      this.router.navigate(['/home'])
    }else {
      this.usuarioAutenticado = false
      alert("Usuário ou senha inválida")
    }
  } 
  
  usuarioEstaAutenticado() {
    return this.usuarioAutenticado
  }

  
}
