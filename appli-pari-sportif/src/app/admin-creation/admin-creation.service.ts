import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { Cote } from '../parier/cote';
import { Match } from '../parier/match';
import { Sport } from '../sport';

@Injectable({
  providedIn: 'root',
})
export class AdminCreationService {
  sportUrl: string;
  matchUrl:string;

  constructor(private http: HttpClient) {
    this.sportUrl = 'http://localhost:8080/sports';
    this.matchUrl = 'http://localhost:8080/matchs';
  }

  public getSports(): Observable<Sport[]> {
    return this.http.get<Sport[]>(this.sportUrl);
  }

  public getEquipes(sportSelected: number|undefined): Observable<Equipe[]> {
    return this.http.get<Equipe[]>(this.sportUrl + '/' + sportSelected + '/equipes');
  }

  public createSport(sport: Sport): Observable<Sport> {
    return this.http.post<Sport>(this.sportUrl, sport);
  }

  public createEquipe(
    equipe: Equipe,
    sportSelected: number | undefined
  ): Observable<Equipe> {
    return this.http.post<Equipe>(
      this.sportUrl + '/' + sportSelected + '/' + 'equipes',
      equipe
    );
  }

  public getEquipeById( sportSelected: number | undefined,equipeId:number| undefined):Observable<Equipe>{
    return this.http.get<Equipe>(
      this.sportUrl + '/' + sportSelected + '/' + 'equipes' + '/' + equipeId );
  }
  public createMatch(
    match: Match,
    sportSelected: number | undefined
  ): Observable<Match> {
    return this.http.post<Match>(
      this.sportUrl + '/' + sportSelected + '/matchs',
      match
    );
  }
public getMatchs( sportSelected: number | undefined):Observable<Match[]>{
  return this.http.get<Match[]>(
    this.sportUrl + '/' + sportSelected + '/matchs-all');
}

createCote(cotes:Cote[],matchId:number|undefined):Observable<Cote[]>{
  return this.http.post<Cote[]>(
    this.matchUrl + '/' + matchId + '/cotesList',cotes );
}



}
