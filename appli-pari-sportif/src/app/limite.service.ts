import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Limite } from './limite';
import { Utilisateur } from './utilisateur.model';

@Injectable({
  providedIn: 'root',
})
export class LimiteService {
  limiteUrl: string;
  constructor(private http: HttpClient) {
    this.limiteUrl = 'http://localhost:8080/utilisateurs';
  }

  createLimite(limite: Limite) {
    return this.http.post<Limite>(
      this.limiteUrl + '/' + limite.utilisateurId + '/limite',
      limite
    );
  }

}
