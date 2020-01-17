import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry, tap } from 'rxjs/operators';
import { CadastroInterface } from '../models/cadastro-interface';

@Injectable({
  providedIn: 'root'
})
export class PesquisandoService {

  pesquisados: Observable<any>
  
  

  constructor(private http: HttpClient) { }

  getCadastrados() {
    const url_api = 'http://localhost:3000/cadastrados';
    return this.http.get<CadastroInterface[]>(url_api).pipe(tap(console.log))
  }

  getCadastradosId(id: number) {
    const url_api = `http://localhost:3000/cadastrados/${id}`;
    return this.http.get<CadastroInterface[]>(url_api)
      .pipe(tap(console.log))
  }
}
