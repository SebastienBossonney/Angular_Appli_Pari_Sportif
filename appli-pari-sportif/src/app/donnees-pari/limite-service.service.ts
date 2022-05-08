import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable } from 'rxjs';
// import { Limite } from './limite-interface.component';

@Injectable({
  providedIn: 'root'
})
export class limiteService {

  // private limiteUrl = '/utilisateurs/{utilisateurId}/limite'
  // private limite!: Limite

  constructor(private http: HttpClient) { }

  // getLimite(): Observable<Limite>{

  //    const limite = this.limiteService.getHeroes()

  //     if (!this.limite){
  //       this.limite=limite.find(truc=>truc.id === id)

  //     }
  //     return this.limite
//  }
// }
}
