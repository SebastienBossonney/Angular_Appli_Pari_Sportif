import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from './donnees-utilisateur/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService{

  private utilisateurUrl:string;

  constructor(private http:HttpClient) { 

    this.utilisateurUrl ='http://localhost:8080/utilisateurs'
  }

  public getUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.utilisateurUrl);
  }

  public getUtilisateurById(){
    return this.http.get<Utilisateur>(this.utilisateurUrl);
  }

  public saveUtilisateur(utilisateur: Utilisateur) {
    return this.http.post<Utilisateur>(this.utilisateurUrl, utilisateur);
  }

  public editUtilisateur(id:number, utilisateur: Utilisateur) {
    return this.http.put<Utilisateur>(this.utilisateurUrl, utilisateur);
  }
  
  public deleteUtilisateur(id : string |number):Observable <any>{ // <any> car on renvoi pas un type Hero, on récupère pas un objet/élément, o na juste besoin de savoir que ça s'est bien passé. 
    return this.http.delete(this.utilisateurUrl + id)
  }

}
