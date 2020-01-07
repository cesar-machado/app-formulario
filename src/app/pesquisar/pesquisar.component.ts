import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../url.api';
import { CadastroService } from '../Cadastro.service';
import { Formulario } from '../shared/formulario.model';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pesquisar',
  templateUrl: './pesquisar.component.html',
  styleUrls: ['./pesquisar.component.css']
})
export class PesquisarComponent implements OnInit {

  constructor(
    private pesquisar:CadastroService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        console.log(id)
        const form$ = this.pesquisar.loadByid(id)
        form$.subscribe(form$ => {
          console.log(form$)
        })
      }
    )
    
    //console.log(this.pesquisar.pesquisar())
  }

}
