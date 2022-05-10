import { Component, OnInit } from '@angular/core';

// import { Limite } from './limite-interface.component';
import { map, Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'app-donnees-pari',
  templateUrl: './donnees-pari.component.html',
  styleUrls: ['./donnees-pari.component.css']
})
export class DonneesPariComponent implements OnInit {

  
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

    


  // limite$!: Observable<Limite>

  constructor() {   }

  

  ngOnInit(): void {
    // this.getLimite()
  }

// private getLimite(){
//   this.limite$ = this.limiteService.getLimite()

// }

}
