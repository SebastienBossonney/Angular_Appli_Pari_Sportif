import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { Pari } from '../parier/pari';
import { PariService } from '../parier/pari.service';
import { UtilisateurService } from '../utilisateur-service.service';

@Component({
  selector: 'app-historique-pari-rugby',
  templateUrl: './historique-pari-rugby.component.html',
  styleUrls: ['./historique-pari-rugby.component.css']
})
export class HistoriquePariRugbyComponent implements OnInit {


utilisateurs!:Utilisateur[];
utilisateur!: Utilisateur;
pari!: Pari;
paris!:Pari[];
  lesParis: boolean =false;
  utilisateurId!: number;


  constructor(private route: ActivatedRoute,
    private router: Router,
    private pariService: PariService,
   private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {
    
  }
   voirParis(Id:number){
    this.utilisateurId = Id;

    if (this.lesParis) {
      this.lesParis = false;
    } else {
      this.lesParis = true;
    }


}
}
