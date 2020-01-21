import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { EntrarService } from './entrar.service';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup
  private usuario: Usuario = new Usuario();

  usuario1: FormControl = new FormControl();
  senha1: FormControl = new FormControl();

  
  constructor( 
    private formBuilder: FormBuilder,
    private entrarService: EntrarService,
    private router : Router,
    private http: HttpClient
  ) { 
    
      this.login = this.formBuilder.group({
      usuario: [null,Validators.required],
      senha: [null, Validators.required]
    })
  }

  
  ngOnInit() {
  }

  /*onSubmit() {
    //console.log(this.usuario1.value, this.senha1.value)
    
   

    if(this.login.valid && this.login.value.usuario === 'cesar' && this.login.value.senha === "123456"  ) {
      this.entrarService.fazerLogin().subscribe(success => console.log(this.login.value)),
      this.router.navigate(['/home'])
    }else {
      alert("Nome Do Usuario ou senha errada")
    }
    
    
    
    //this.entrarService.fazerLogin(this.usuario)
    
    if (this.login.valid) {
      console.log('submit')
   
    }*/
  

    fazerLogin() {
      this.entrarService.fazerLogin(this.usuario)
    }
}
