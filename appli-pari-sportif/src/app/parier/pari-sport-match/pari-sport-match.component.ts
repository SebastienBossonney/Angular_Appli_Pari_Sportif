
import { JsonpClientBackend } from '@angular/common/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit, OnDestroy, LOCALE_ID, Inject } from '@angular/core';
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
import { DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { PariService } from '../pari.service';
import { UtilisateurService } from 'src/app/utilisateur-service.service';

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
  //pariDate! : DatePipe;

  //coteSelected!: number;
  pari!: Pari;
  radioButtonOk: boolean = false;
  messageRadio: string = " ";
  messageSommeAParier: string = "Il faut remplir la somme à parier";


  //cote!: Cote;

  today: string;
  heure: string;

  equipePari: string = '';

  matchSelected: boolean = false;
  //equipes: Equipe[];

  constructor( private route: ActivatedRoute, private router: Router, private matchService: MatchService,
    private fb: FormBuilder, private datePipe: DatePipe, private pariService : PariService,
    private utilisateurService:UtilisateurService
    ) {
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy')!;
    this.heure = this.datePipe.transform(new Date(),'HH:mm')!
  }

  pariForm = this.fb.group({
    radioPari: ['', Validators.required],
    sommeAParier: ['', Validators.required],
  })

  ngOnInit(): void {

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
       if(this.matchSelectCH)
       {

          this.equipe1 = this.matchSelectCH.equipes[0];
          this.equipe2 = this.matchSelectCH.equipes[1];
          this.matchService.getCotesByMatchId(this.matchSelectCH.id).subscribe(data => {
            this.cotesM = data;
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
      const user =  JSON.parse(sessionStorage.getItem("user")!);

      ///ne peut pas parier
      if(sommeAParier > user?.montantDisponible){
        this.swalWithBootstrapButtons.fire('',"Vous ne avez pas soufisant de mountant disponible pour faire cet pari", 'warning');
      }
      //peut parier
      else{



        this.pari = {
          id: -1,
          montantJoue: sommeAParier,
          datePari: this.today,
          heurePari: this.heure,
          resultat: formValue.radioPari.statut,
          montantResultat: formValue.radioPari.valeur * sommeAParier,
          utilisateurId: user?.id,
          coteId : formValue.radioPari.id}
          console.log(this.pari);

          this.pariService.addPari(this.pari).subscribe(()=> this.pari);

          switch(formValue.radioPari.statut)
          {
            case 'GAGNANT' :
             {  console.log(formValue.radioPari.statut);
                this.equipePari = this.equipe1.nom; break;}
             case 'PERDANT' :
             {
              console.log(formValue.radioPari.statut);
              this.equipePari = this.equipe2.nom; break;}
            case 'NUL' :
            {
              console.log(formValue.radioPari.statut);
              this.equipePari = "Match Nul"; break;}
          }

          user.montantDisponible = user.montantDisponible - sommeAParier;
          console.log(user.montantDisponible);
          this.swalWithBootstrapButtons.fire('',"Bonne Chance! Vous venez de parier " + sommeAParier + " euros à " + this.equipePari  + " . Il vous reste maintenant " + user.montantDisponible + " euros. Si la chance est de votre côté, vous gagnerez " + this.pari.montantResultat + "!", 'success')
          //this.utilisateurService.editUtilisateur(this.user.id, this.user).subscribe(()=> this.user);
      }

    }


}
