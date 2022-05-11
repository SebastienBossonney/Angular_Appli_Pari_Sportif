import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from './sport';

@Injectable({
  providedIn: 'root'
})
export class PariSportService {

  private pariUrl : string;

  constructor(private http: HttpClient) {
    this.pariUrl = 'http://localhost:8080/sports';
   }

  public getSports(): Observable<Sport[]> {

     return this.http.get<Sport[]>(this.pariUrl);
   }

   getSport(id: number): Observable<Sport>
   {
     return this.http.get<Sport>(this.pariUrl + id)
   }
}
