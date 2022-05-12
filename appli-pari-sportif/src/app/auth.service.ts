import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';
import { UtilisateurService } from './utilisateur-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  constructor(private userService: UtilisateurService){

  }

  login(name:string, password:string): Observable<boolean>{

    const isLogged = (name==='admin' && password==='admin');

    return of(isLogged).pipe(
      delay(1000),
      tap(isLogged => this.isLogged=isLogged)
    )
  }

  logout(){
    this.isLogged=false;
  }
}

