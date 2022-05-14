
import { JsonpClientBackend } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, ParamMap, Router, RouterStateSnapshot } from '@angular/router';
import Swal from 'sweetalert2';
import { Observable, switchAll, switchMap } from 'rxjs';
import { Equipe } from 'src/app/equipe-interface/equipe-interface.component';
import { Utilisateur } from 'src/app/utilisateur.model';
import { Cote } from '../cote';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { Pari } from '../pari';
import { DatePipe } from '@angular/common';

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
  equipe1! : Equipe;
  equipe2! : Equipe;
  matchSelectCH!: Match;
  cotesM! : Cote[];
  coteE1! : Cote;
  coteE2!: Cote;
  coteMN!: Cote;
  user!: Utilisateur;

  //coteSelected!: number;
  pari!: Pari;
  radioButtonOk: boolean = false;
  messageRadio: string = " ";
  messageSommeAParier: string = "Il faut remplir la somme à parier";


  cote!: Cote;

  today: Date = new Date();
  pipe = new DatePipe('Europe/Paris');
  todayWithPipe = null;

  matchSelected: boolean = false;
  //equipes: Equipe[];

  constructor( private route: ActivatedRoute, private router: Router, private matchService: MatchService, private fb: FormBuilder) {

  }

  pariForm = this.fb.group({
    radioPari: ['', Validators.required],
    sommeAParier: ['', Validators.required],
  })

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

           this.equipe1 = this.matchSelectCH.equipes[0];
          this.equipe2 = this.matchSelectCH.equipes[1];
          this.matchService.getCotesByMatchId(this.matchSelectCH.id).subscribe(data => {this.cotesM = data;
           if(this.cotesM.length == 3){

            this.coteE1 = this.cotesM.find(x => x.statut == 'GAGNANT')!;
            this.coteE2 = this.cotesM.find(x => x.statut == 'PERDANT')!;
            this.coteMN = this.cotesM.find(x => x.statut == 'NUL')!;
          }
          });

          this.matchSelected = true;
        }
      else{this.matchSelected = false;}
    }

    swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success'

      },
      buttonsStyling: false
    })

     parier(){

      const formValue = this.pariForm.value;
      const sommeAParier = formValue.sommeAParier;
      this.user =  JSON.parse(sessionStorage.getItem("user")!);
      if(sommeAParier > this.user.montantDisponible){
        this.swalWithBootstrapButtons.fire('',"Vous ne avez pas soufisant de mountant disponible pour faire cet pari", 'warning');
      }
      else{
      const coteSelected = this.cotesM[formValue.radioPari];
      this.pari.coteId= coteSelected.id;
      const stringDate = this.pipe.transform(Date.now(), 'dd/MM/yyyy');
      //let dateResult = new Date(stringDate);
      //this.pari.datePari = new Date(stringDate);
      }
      console.log(sommeAParier);
    }


}
