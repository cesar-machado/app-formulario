import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms'
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  formulario: FormGroup 

  constructor(private formBuilder: FormBuilder,private http: HttpClient) { }

  ngOnInit() {
    //Essa é uma das formas para colocar formulario reativo.
    /*this.formulario = new FormGroup({
      "nome": new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)]),
      "idade": new FormControl(null,[Validators.required, Validators.minLength(3),Validators.maxLength(120)])
      
    })*/
    
    this.formulario = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(3)]],
      idade: [null],
      escolaridade: [null],
      email: [null,[Validators.required, Validators.pattern("[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)")]],
      endereco: [null],
      numero: [null],
      complemento: [null],
      cep: [null],
      city: [null],
      state: [null],
      course: [null],
      file: [null],
      anyCourse: [null],
    })
  }


  onSubmit() {
    console.log(this.formulario.value)

    this.http.post('https://httpbin.org/post', JSON.stringify(this.formulario.value))

      .subscribe(dados =>  {
        console.log(dados) 
        //Reseta o form
        this.formulario.reset();
      })

  }
}
