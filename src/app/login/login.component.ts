import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { EntrarService } from './entrar.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup
  usuario: Usuario 

  constructor( 
    private formBuilder: FormBuilder,
    private entrarService: EntrarService,
    private router : Router
  ) { 
    
      this.login = this.formBuilder.group({
      usuario: [null,Validators.required],
      senha: [null, Validators.required]
    })
  }

  
  ngOnInit() {
  }

  onSubmit() {
    console.log(this.login)
    if(this.login.valid && this.login.value.usuario === 'cesar' ) {
      this.entrarService.fazerLogin().subscribe(success => console.log(this.login.value)),
      this.router.navigate(['/home'])
    }else {
      alert("Nome Do Usuario ou senha errada")
    }
    
    
    
    //this.entrarService.fazerLogin(this.usuario)
    
    /*if (this.login.valid) {
      console.log('submit')
   
    }*/
  }
}
