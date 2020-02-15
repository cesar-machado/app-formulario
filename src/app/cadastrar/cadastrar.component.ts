import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { URL_API } from '../url.api';
import { CadastroService } from '../cadastro.service';
import { Formulario } from '../shared/formulario.model';
import { CepService } from '../cep.service';



@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css'],
})
export class CadastrarComponent implements OnInit {

  formulario: FormGroup
  form: Formulario


  constructor(
        private formBuilder: FormBuilder,
        private http: HttpClient,
        private cadastro: CadastroService,
        private cepService: CepService
    ) { }

  ngOnInit() {
    //Essa é uma das formas para colocar formulario reativo.
    /*this.formulario = new FormGroup({
      "nome": new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)]),
      "idade": new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)])
      
    })*/
    
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3),Validators.maxLength(120)]],
      idade: [null,[Validators.required, Validators.min(13)]],
      escolaridade: [null, Validators.required],
      email: [null,[Validators.required, Validators.email]],
      
      endereco: this.formBuilder.group({
      cep: [null],
      rua: [null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)]],
      bairro: [null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)]],
      numero: [null, [Validators.required, Validators.minLength(1)]],
      complemento: [null],
      city: [null, [Validators.required, Validators.minLength(3),Validators.maxLength(120)]],
      state: [null, [Validators.required, Validators.minLength(1),Validators.maxLength(120)]],
      }),
      course: [null, Validators.required],
      file: [null],
      anyCourse: [null],
    })
  }


  onSubmit() {
    
    console.log(this.formulario.status)
    if (this.formulario.valid) {
      console.log('submit')
      this.cadastro.cadastrar(this.formulario.value).subscribe(
        success => {
          console.log("sucesso"), 
          this.formulario.reset()},
        error => {console.error(error),alert('O usuário não foi adicionado, veja se não tem nenhum campo inválido')},
        () => console.log('request completo')       
      );
    }  
  }
  
  consultaCEP() {
    const cep = this.formulario.get('endereco.cep').value;

    if (cep != null && cep !== '') {
      this.cepService.consultaCEP(cep)
      .subscribe(dados => {
        return this.populaDadosForm(dados);  
      });
    }
  }

  populaDadosForm(dados) {
    // this.formulario.setValue({});

    this.formulario.patchValue({
      endereco: {
        // cep: dados.cep,
        rua: dados.logradouro,
        //numero: dados.numero,
        complemento: dados.complemento,
        bairro: dados.bairro,
        city: dados.localidade,
        state: dados.uf
      }
    })
  }
}
