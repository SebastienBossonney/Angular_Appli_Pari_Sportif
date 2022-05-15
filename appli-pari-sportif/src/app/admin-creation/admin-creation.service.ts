import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { Sport } from '../sport';

@Injectable({
  providedIn: 'root'
})
export class AdminCreationService {
  sportUrl: string;
  equipeUrl: string;
  matchUrl: string;

  constructor(private http: HttpClient) {
    this.sportUrl='http://localhost:8080/sports';
    this.equipeUrl='http://localhost:8080/equipes';
    this.matchUrl='http://localhost:8080/matchs';

   }

public getSports(): Observable<Sport[]> {
  return this.http.get<Sport[]>(this.sportUrl);
}

public createSport(sport : Sport): Observable<Sport> {
  return this.http.post<Sport>(this.sportUrl,sport);
}

public createEquipe(equipe : Equipe,sportSelected: number|undefined): Observable<Equipe[]> {
  return this.http.post<Equipe[]>(this.sportUrl + '/'  + sportSelected + '/'+'equipes',equipe) ;
}




}
