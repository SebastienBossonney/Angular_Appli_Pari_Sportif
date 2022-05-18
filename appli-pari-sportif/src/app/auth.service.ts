import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject,map, Observable, of, pipe,} from 'rxjs';
import Swal from 'sweetalert2';
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

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
       confirmButton: 'btn btn-success'
                 },
    buttonsStyling: false
  });


  login(identifiant: string, password: string): Observable<Utilisateur> {
    return this.http
      .get<Utilisateur>(this.authUrl + '/' + identifiant + '/' + password)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        sessionStorage.setItem('user', JSON.stringify(user));
        if(user){
          this.isLogged=true;
        }
        else{
          this.isLogged=false;
        }
        return user;
    }));
  }

  logout() {
    if(sessionStorage.getItem('user')){
      sessionStorage.removeItem('user');
    }
    this.isLogged=false;

  }
 }
