import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sport } from '../sport';
import { Pari } from './pari';

@Injectable({
  providedIn: 'root'
})
export class PariService {

  private pariUrl : string;

  constructor(private http: HttpClient) {
    this.pariUrl = 'http://localhost:8080';
   }

  public addPari(pari: Pari): Observable<Pari> {

     return this.http.post<Pari>(this.pariUrl + '/utilisateurs/' + pari.utilisateurId + '/paris', pari );
   }

   public getPariByUtilisateur (userId: number): Observable<Pari[]>
   {
     return this.http.get<Pari[]>(this.pariUrl + '/utilisateurs/' + userId + '/paris');
   }

}
