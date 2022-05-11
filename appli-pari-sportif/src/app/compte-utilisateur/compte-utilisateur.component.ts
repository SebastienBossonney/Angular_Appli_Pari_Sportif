import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { UtilisateurService} from '../utilisateur-service.service';

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {


  utilisateur!:Utilisateur;
  



  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute)  {}

  ngOnInit(){
  this.getUtilisateurById()
 
  }

  getUtilisateurById(){
    this.route.paramMap.pipe(switchMap((params:ParamMap)=>{
      const id = +params.get('id')!;
      const user = this.utilisateurService.getUtilisateurById(id);
      return user
    }),map(utilisateur => this.utilisateur= utilisateur)
    ).subscribe()
  }
}



