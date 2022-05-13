import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class MotDePasseOublieService {
  motDePasseOublieUrl: string;
  constructor(
    private http: HttpClient,
  ) {
    this.motDePasseOublieUrl = 'http://localhost:8080/utilisateurs/motDePasseOublie';
  }

  findEmail(email: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.motDePasseOublieUrl + '/' + email);
  }
}
