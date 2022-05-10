import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from '../utilisateur-service.service';
import { Utilisateur } from './utilisateur';

@Component({
  selector: 'app-donnees-utilisateur',
  templateUrl: './donnees-utilisateur.component.html',
  styleUrls: ['./donnees-utilisateur.component.css']
})
export class DonneesUtilisateurComponent implements OnInit {

 utilisateur!:Utilisateur[];

  mdp=false;//Pour le bouton modifier le mot de passe 
  email=false;//Pour le bouton modifier l'email 

  changeMdp() { //Pour le bouton modifier de limite d'argent
    if(this.mdp) {
      this.mdp=false;
    } else {
      this.mdp= true;
    }
  }
  
  changeEmail() { //Pour le bouton modifier de limite d'argent
    if(this.email) {
      this.email=false;
    } else {
      this.email= true;
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
