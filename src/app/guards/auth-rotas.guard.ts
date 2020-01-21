import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { EntrarService } from '../login/entrar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthRotasGuard implements CanActivate {
  constructor (
    private entrarService: EntrarService,
    private router: Router
    ) {

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean {
   
    if(this.entrarService.usuarioEstaAutenticado()){
      return true;
    }
      this.router.navigate([''])

      return false;
    
  }
  
}
