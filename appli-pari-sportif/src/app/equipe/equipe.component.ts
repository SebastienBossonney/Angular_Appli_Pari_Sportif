import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { EquipeService } from '../equipe.service';
import {map, Observable, Subject, takeUntil} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PariSportService } from '../parier/pariSportService';
import { Sport } from '../sport';
import { getSafePropertyAccessString } from '@angular/compiler';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css']
})
export class EquipeComponent implements OnInit {

equipe!: Equipe;
equipes!: Equipe[];
sport!:Sport;
sports!: Sport[];
sportId!: number;
private sportSub = new Subject<void>()
selectDefaultValue:any;
sportSelect!:any;
s!: Sport;
sportSelected: boolean=false;
choixEquipe: boolean=false;


  constructor(private route: ActivatedRoute, private router: Router, private equipeService: EquipeService,
    private pariSportService : PariSportService) {}

  ngOnInit(): void {
    this.pariSportService.getSports().subscribe((data) => {
      this.sports = data;
    });

  //  this.route.paramMap.subscribe(params => {
  //     this.sportId= +params.get('id')!;

  //     this.equipeService.getEquipes(this.sportId).subscribe(data => {this.equipes = data})
  // })
  }


  onChange(sportId:number)
     {
       if (this.choixEquipe){
      this.choixEquipe=false;
    } else {
      this.choixEquipe= true;
    }
       this.sportId= sportId;
       this.sportSelected=true;

       this.equipeService.getEquipes(sportId).subscribe(data => {this.equipes = data})
       console.log(this.equipes)
    }


// editEquipes(equipe: Equipe){
//     const modifiedEquipe ={id : equipe.id, nom : String};
//     //const equipes = this.equipes;
//     this.equipeService.editEquipes(equipe.id, modifiedEquipe).subscribe(()=>{
//       let test = this.equipes.find(equipe$=>equipe$.id==modifiedEquipe.id) //hero$ crée  une nouvelle variable
//       if(test !== undefined){
//         test.nom = modifiedEquipe.nom
// }
// })
//    }


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
