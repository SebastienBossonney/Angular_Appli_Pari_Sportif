
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Equipe } from 'src/app/equipe-interface/equipe-interface.component';
import { Cote } from '../cote';
import { Match } from '../match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-pari-sport-match',
  templateUrl: './pari-sport-match.component.html',
  styleUrls: ['./pari-sport-match.component.css']
})
export class PariSportMatchComponent implements OnInit, OnDestroy {

  sportId: number | undefined;
  private sub: any;
  matchs!: Match[];
  selectDefaultValue : any;
  matchSelect: any;
  fb!: FormBuilder;
  pariForm!:FormGroup;
  equipe1! : Equipe;
  equipe2! : Equipe;
  matchSelectCH!: Match;
  cotesM! : Cote[];
  coteE1!: Cote;
  coteE2!: Cote;
  coteMN!: Cote;

  matchSelected: boolean = false;
  //equipes: Equipe[];

  constructor( private route: ActivatedRoute, private router: Router, private matchService: MatchService) {

  }

  ngOnInit(): void {
      console.log('j entre');
      this.route.paramMap.subscribe(params => {
      this.sportId= +params.get('id')!;

      this.matchService.getMatchs(this.sportId).subscribe(data => {this.matchs = data;
        if(this.matchs.length == 0)
        {this.matchSelected = false;
        }});
    });}

    ngOnDestroy(): void {
      //Called once, before the instance is destroyed.
      //Add 'implements OnDestroy' to the class.
      this.matchSelect = false;
    }

    onChange(event: Event)
     {
       console.log("rezgui");
       if(this.matchSelectCH)
       {
           this.pariForm = this.fb.group({
            equipe1: ''
          });
           this.equipe1 = this.matchSelectCH.equipes[0];
          this.equipe2 = this.matchSelectCH.equipes[1];
          this.matchService.getCotesByMatchId(this.matchSelectCH.id).subscribe(data => {this.cotesM = data;
           if(this.cotesM.length == 3){
            this.coteE1 = this.cotesM.find(x => x.statut == 'GAGNANT')!;
            this. coteE2 = this.cotesM.find(x => x.statut == 'PERDANT')!;
            this.coteMN = this.cotesM.find(x => x.statut == 'NUL')!;
          }
          });
          this.matchSelected = true;
        }
      else{this.matchSelected = false;}
    }

    parier(){
      
    }
}
