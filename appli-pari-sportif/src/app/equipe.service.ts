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

  public editEquipes(sportId:number, id:number, equipe: Equipe) {
    return this.http.put<Equipe>(this.equipeUrl + '/'+ sportId + '/equipes/'+ id, equipe);
  }
public getEquipeById(sportId: number, id:number): Observable<Equipe>{
    return this.http.get<Equipe>(this.equipeUrl +'/' + sportId + '/equipes/' + id);
  }

  public saveEquipe(sportId:number, equipe: Equipe) {
    return this.http.post<Equipe>(this.equipeUrl + '/' + sportId + '/equipes', equipe);
  }

public deleteEquipe(sportId:number, id : number):Observable <any>{ 
    return this.http.delete(this.equipeUrl +'/' + sportId + '/equipes/' + id)
  }
}
