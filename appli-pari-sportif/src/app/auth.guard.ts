import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  router: any;
  constructor(private authService: AuthService, private routage: Router) {}

  canActivate():boolean {
    if(this.authService.isLogged){
    return true;
  }
  this.router.navigate(['/connexion'])
  return false;
}


}
