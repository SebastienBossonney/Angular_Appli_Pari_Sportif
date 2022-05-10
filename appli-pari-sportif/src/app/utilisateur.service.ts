import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Utilisateur } from './utilisateur.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()
export class UserService {

  private utilisateursUrl: string;

  constructor(private http: HttpClient) {
    this.utilisateursUrl = 'http://localhost:8080/utilisateurs';
  }

  public findAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateursUrl);
  }

  public save(user: Utilisateur) {
    return this.http.post<Utilisateur>(this.utilisateursUrl, user.id);
  }
}
