import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged: boolean = false;

  login(name:string, password:string): Observable<boolean>{
    //appel au service pour recup tous les utilisateurs + verifier le .name et .password
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
