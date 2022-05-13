import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cote } from './cote';
import { Match } from './match';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  private matchUrl : string;


  constructor(private http: HttpClient) {
    this.matchUrl = 'http://localhost:8080';
   }

   public getMatchs(sportId: number): Observable<Match[]> {
     console.log();
    return this.http.get<Match[]>(this.matchUrl + '/sports/' +sportId+ '/matchs');
  }

  public getCotesByMatchId(matchId: number): Observable<Cote[]> {
     console.log();
    return this.http.get<Cote[]>(this.matchUrl + '/matchs/' +matchId+ '/cotes');
  }
}
