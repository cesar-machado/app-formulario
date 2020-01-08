import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



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

  fazerLogin(){
    return this.http.get('http://localhost:3000/login')
  }  
}
