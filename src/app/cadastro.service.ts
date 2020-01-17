import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, take,tap, delay } from 'rxjs/operators'

import { URL_API } from './url.api';
import { Formulario } from './shared/formulario.model';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  /*pesquisar() {
    return this.http.get<Formulario[]>('http://localhost:3000/cadastrados')
    .pipe(
      delay(2000),
      tap(console.log)
    );
  }*/
  
  loadByid(id) {
    return this.http.get(`http://localhost:3000/cadastrados/${id}`)
  }


  cadastrar(formulario: Formulario) {

    return this.http.post(`http://localhost:3000/cadastrados`,formulario)
      .pipe(take(1))
  }
}
