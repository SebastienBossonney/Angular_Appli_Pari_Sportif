import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './utilisateur.model';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class UserService {

  private utilisateursUrl!: string;
  private userSubject!: BehaviorSubject<Utilisateur>;
  public utilisateur!: Observable<Utilisateur>;

  constructor(private http: HttpClient, private router: Router) {
    this.utilisateursUrl = 'http://localhost:8080/utilisateurs';
  }

  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateursUrl);
  }

  public save(user: Utilisateur):Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl, user.id);
  }

  public createUtilisateur(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl, user);
  }

//   login(username:string, password:string) {
//     return this.http.post<Utilisateur>(this.utilisateursUrl, { username, password })
//         .pipe(map(user => {
//             // store user details and jwt token in local storage to keep user logged in between page refreshes
//             localStorage.setItem('user', JSON.stringify(user));
//             this.userSubject.next(user);
//             return user;
//         }));
// }

// logout() {
//   // remove user from local storage and set current user to null
//   localStorage.removeItem('user');
//   this.userSubject.next(null);
//   this.router.navigate(['/account/login']);
// }

}
