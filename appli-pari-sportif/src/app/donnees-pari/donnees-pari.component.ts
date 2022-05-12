import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

// import { Limite } from './limite-interface.component';
import { map, Observable, Subject, Subscription, switchMap, takeUntil } from 'rxjs';
import { UtilisateurService } from '../utilisateur-service.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-donnees-pari',
  templateUrl: './donnees-pari.component.html',
  styleUrls: ['./donnees-pari.component.css']
})
export class DonneesPariComponent {

  
  limiteArg=false;//Pour le bouton modifier de limite d'argent
  salaire=false; //Pour le bouton modifier le salaire
  risque=false;//Pour le bouton modifier le seuil de risque 

 

  changeLimite() { //Pour le bouton modifier de limite d'argent
    if(this.limiteArg) {
      this.limiteArg=false;
    } else {
      this.limiteArg= true;
    }
  }
  
  changeSalaire() {
    if (this.salaire){
      this.salaire=false;
    } else {
      this.salaire= true;
    }

    }

    changeRisque() {
    if (this.risque){
      this.risque=false;
    } else {
      this.risque= true;
    }

    }

    
  utilisateur!:Utilisateur;
  



  // constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute)  {}

  // ngOnInit(){
  // this.getUtilisateurById()
  // this.utilisateur=this.route.snapshot.data['utilisateur']
 
  // }

  // getUtilisateurById(){
  //   this.route.paramMap.pipe(switchMap((params:ParamMap)=>{
  //     const id = +params.get('id')!;
  //     const user = this.utilisateurService.getUtilisateurById(id);
  //     return user
  //   }),map(utilisateur => this.utilisateur= utilisateur)
  //   ).subscribe()
  // }
}

  // limite$!: Observable<Limite>


  

  

// private getLimite(){
//   this.limite$ = this.limiteService.getLimite()

// }


