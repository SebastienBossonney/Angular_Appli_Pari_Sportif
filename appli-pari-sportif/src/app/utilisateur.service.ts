import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './utilisateur.model';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, map } from 'rxjs';
import { Router } from '@angular/router';
import { Limite } from './limite';

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

  public save(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl, user.id);
  }

  public createUtilisateur(user: Utilisateur): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(this.utilisateursUrl, user);
  }

  createLimite(limite: Limite) {
    return this.http.post<Limite>(
      this.utilisateursUrl + '/' + limite.utilisateurId + '/limite',
      limite
    );
  }
}
