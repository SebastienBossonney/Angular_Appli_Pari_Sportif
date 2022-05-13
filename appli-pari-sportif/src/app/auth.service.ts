import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map, Observable, pipe,} from 'rxjs';
import { UtilisateurService } from './utilisateur-service.service';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLogged: boolean = false;
  authUrl: string;
  router: any;
  public user!: Observable<Utilisateur>;

  constructor(
    private http: HttpClient,
    private userService: UtilisateurService
  ) {
    this.authUrl = 'http://localhost:8080/utilisateurs';

  }


  login(identifiant: string, password: string): Observable<Utilisateur> {

    return this.http
      .get<Utilisateur>(this.authUrl + '/' + identifiant + '/' + password)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('user', JSON.stringify(user));
        return user;
    }));
  }

  logout() {
    if(sessionStorage.getItem('user')){
      sessionStorage.removeItem('user');
    }
    this.router.navigate(['/account/login']);
  }
 }
