import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of, pipe, tap } from 'rxjs';
import { UtilisateurService } from './utilisateur-service.service';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user !: Utilisateur;
  isLogged: boolean = false;
  authUrl : string;
  userSubject: any;
  router: any;
  constructor(private http: HttpClient, private userService: UtilisateurService){
    this.authUrl = 'http://localhost:8080/utilisateurs';
  }

  login(identifiant:string, password:string) {
    console.log(identifiant, '        ', password);
    return this.http.get<Utilisateur>(this.authUrl + '/' + identifiant + '/' +password )
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));
            this.userSubject.next(user);
            return user;
        }));
}

logout() {
// remove user from local storage and set current user to null
localStorage.removeItem('user');
this.userSubject.next(null);
this.router.navigate(['/account/login']);
}
}

