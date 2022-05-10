// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
// import { catchError, Observable, retry, throwError } from 'rxjs';
// import { Utilisateur } from './utilisateur';

// @Injectable({
//   providedIn: 'root'
// })
// export class UtilisateurService {

//   private utilisateursUrl = '/api/utilisateurs/';
//   constructor(private http: HttpClient) {}

//   getHeroes() : Observable<Utilisateur[]> {
//     return this.http.get<Utilisateur[]>(this.utilisateursUrl,{
//       headers: new HttpHeaders({'Authorization': 'myAuthToken'})
//     }).pipe(retry(2),
//     catchError((error:HttpErrorResponse)=> {
//       console.log(error)
//       return throwError(() => new Error('test'))
//     }))
//   }

//   createUtilisateur(name: string, team: string): Observable<Utilisateur> {
//     const utilisateur = { id : uuidv4(), name, team }
//     return this.http.post<Utilisateur>(this.utilisateursUrl, utilisateur)
//   }

//   editUtilisateur(id: string | number, hero:Utilisateur): Observable<any> {
//     return this.http.put(this.utilisateursUrl + id, hero);
//   }

//   deleteUtilisateur(id: string | number): Observable<any> {
//     return this.http.delete(this.utilisateursUrl +id);
//   }

// }
