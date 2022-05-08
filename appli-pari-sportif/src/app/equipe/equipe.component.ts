import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { EquipeService } from '../equipe.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

  equipe$!: Observable<Equipe>
  constructor() {}

  ngOnInit(): void {
   // this.getEquipe()
  }

//   private getEquipe(){
//     this.equipe$=this.equipeService.getEquipe()
//   }

//   add(name: string){
//   this.equipe$ = this.equipeService.createHero(name)
//   this.equipe$.subscribe()
//   this.getEquipe()
//   }

// rename(equipe : Equipe) {
//     const modifiedEquipe ={id : equipe.id, name : String};
//     //const equipes = this.equipes;
//     this.equipeService.editHero(equipe.id,modifiedEquipe).subscribe(()=>{
//       let test = this.heroes.find(hero$=>hero$.id==modifiedHero.id) //hero$ crée  une nouvelle variable
//       if(test !== undefined){
//         test.name = modifiedHero.name
//       }
//     })
//   }
    
}
