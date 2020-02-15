import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { URL_API } from '../url.api';
import { Formulario } from '../shared/formulario.model';
import { ActivatedRoute, Params } from '@angular/router';
import { PesquisandoService } from './pesquisando.service';
import { CadastroInterface } from '../models/cadastro-interface';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  cadastroInterface: CadastroInterface[]

  pesquisar$: Observable<CadastroInterface[]>
  
  pesquisaControlNome: FormControl = new FormControl();
  pesquisaControlId: FormControl = new FormControl();

  readonly SEARCH_URL = ' http://localhost:3000/cadastrados'
  result$: Observable<any>

  constructor(
    private route: ActivatedRoute,
    private pesquisando: PesquisandoService,
    private http: HttpClient
    ) { }

    

  ngOnInit() {
    //this.pesquisando.getCadastrados().subscribe(data => this.cadastroInterface = data);
    
    //this.pesquisando.getCadastradosId(2).subscribe(data => this.cadastroInterface = data)
     
    this.pesquisar$ = this.pesquisando.getCadastrados();
  }

  onSearch() {
    //console.log(this.pesquisaControl.value);
    let nome = this.pesquisaControlNome.value
    //let id = this.pesquisaControlId.value
    let value = this.pesquisaControlNome.value
   
    if (value && (value = value.trim()) !== ''){
    let params = new HttpParams();
    //params = params.set('id', id)
    params = params.set('nome', nome)
    
    this.result$ = this.http.get(this.SEARCH_URL, {params})
      .pipe(
        tap(console.log)
      )
      this.pesquisaControlNome.reset()
    }
  }


}
