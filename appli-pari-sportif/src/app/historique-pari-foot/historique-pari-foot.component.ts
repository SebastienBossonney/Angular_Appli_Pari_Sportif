import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { EquipeService } from '../equipe.service';
import { Pari } from '../parier/pari';
import { PariService } from '../parier/pari.service';
import { UtilisateurService } from '../utilisateur-service.service';


@Component({
  selector: 'app-historique-pari-foot',
  templateUrl: './historique-pari-foot.component.html',
  styleUrls: ['./historique-pari-foot.component.css']
})
export class HistoriquePariFootComponent implements OnInit {


utilisateurs!:Utilisateur[];
utilisateur!: Utilisateur;
pari!: Pari;
paris!:Pari[];
utilisateurId!:number;
lesParis: boolean=false;

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
