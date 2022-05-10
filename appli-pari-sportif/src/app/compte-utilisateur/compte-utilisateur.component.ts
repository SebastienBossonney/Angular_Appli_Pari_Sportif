import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { UtilisateurService} from '../utilisateur-service.service';

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {


  // utilisateur!:Utilisateur[];


  constructor()  {

  ngOnInit(): void {

    // this.utilisateurService.getUtilisateur().subscribe(utilisateur =>{
    //   this.utilisateur=utilisateur;




  }

//   this.utilisateurService.getUtilisateurById(Utilisateur.id).subscribe(() =>{
//    this.heroes = this.heroes.filter(selectHero =>selectHero !== hero)

}
