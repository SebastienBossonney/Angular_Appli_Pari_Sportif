import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from './equipe-interface/equipe-interface.component';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private equipeUrl:string;

  constructor(private http:HttpClient) {
    this.equipeUrl ='http://localhost:8080/sports'
  }


  public getEquipes(sportId: number): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.equipeUrl+ '/' + sportId + '/equipes-all');
  }

  // public editEquipes(id:number, equipe: Equipe) {
  //   return this.http.put<Equipe>(this.equipeUrl + '/'+ id + '/equipes-all');
  // }


}
