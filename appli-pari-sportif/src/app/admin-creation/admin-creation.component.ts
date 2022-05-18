import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { EquipeService } from '../equipe.service';
import { Cote } from '../parier/cote';
import { Match } from '../parier/match';
import { MatchService } from '../parier/match.service';
import { PariService } from '../parier/pari.service';
import { Sport } from '../sport';
import { AdminCreationService } from './admin-creation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-creation',
  templateUrl: './admin-creation.component.html',
  styleUrls: ['./admin-creation.component.css'],
})
export class AdminCreationComponent implements OnInit {
  sports!: Sport[];
  selectDefaultValue: any;
  sport!: Sport;
  sportSelect!: number;
  equipe: Equipe | undefined;
  equipe1!: Equipe;
  equipe2!: Equipe;
  matchs!: Match[];
  matchSelected: boolean = false;
  match!: Match;
  matchSelectCH!: Match;
  equipes!: Equipe[];
  coteE1!: Cote;
  coteE2!: Cote;
  coteMN!: Cote;
  cotes!: Cote[];
  equipeSelect1!: number;
  equipeSelect2!: number;

  constructor(
    private builder: FormBuilder,
    private adminCreationService: AdminCreationService,
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private pariService: PariService
  ) {}

  ngOnInit(): void {
    this.adminCreationService.getSports().subscribe((data: Sport[]) => {
      this.sports = data;
    });
  }

  creationSport = this.builder.group({
    nameSport: ['', Validators.required],
  });

  creationEquipe = this.builder.group({
    sportSelected: new FormControl(),
    nameEquipe: ['', Validators.required],
  });

  creationMatch = this.builder.group({
    dateMatch: ['', Validators.required],
    heureMatch: ['', [Validators.required]],
    lieu: ['', Validators.required],
    ville: ['', Validators.required],
    pays: ['', Validators.required],
  });

  creationCotes = this.builder.group({
    valeurE1: ['', Validators.required],
    valeurE2: ['', Validators.required],
    valeurMN: ['', Validators.required],
  });

  get nameSport(): AbstractControl {
    return this.creationSport.controls['nameSport'];
  }
  get nameEquipe(): AbstractControl {
    return this.creationSport.controls['nameEquipe'];
  }
  get dateMatch(): AbstractControl {
    return this.creationSport.controls['dateMatch'];
  }
  get heureMatch(): AbstractControl {
    return this.creationSport.controls['heureMatch'];
  }
  get lieu(): AbstractControl {
    return this.creationSport.controls['lieu'];
  }
  get ville(): AbstractControl {
    return this.creationSport.controls['ville'];
  }
  get pays(): AbstractControl {
    return this.creationSport.controls['pays'];
  }
  get statut(): AbstractControl {
    return this.creationSport.controls['pays'];
  }
  get valeur(): AbstractControl {
    return this.creationSport.controls['pays'];
  }

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
    },
    buttonsStyling: false,
  });

  submitSport() {
    this.sport = {
      id: -1,
      version: 0,
      nomSport: this.creationSport.get('nameSport')?.value,
    };

    this.adminCreationService
      .createSport(this.sport)
      .subscribe((sport) => this.samePage());

    //window.location.reload();

    this.swalWithBootstrapButtons
      .fire('', 'Le Sport a bien été créé.', 'success')
      .then(() => {
        window.location.reload();
      });
  }

  submitEquipe(sportSelected: number | undefined) {
    this.equipe = {
      id: -1,
      nom: this.creationEquipe.get('nameEquipe')?.value,
    };

    this.adminCreationService
      .createEquipe(this.equipe, sportSelected)
      .subscribe((equipe) => this.samePage());
    //window.location.reload();
    this.swalWithBootstrapButtons
      .fire('', "L'equipe a bien été créée.", 'success')
      .then(() => {
        window.location.reload();
      });
  }

  loadEquipes(sportSelected: number | undefined) {
    this.adminCreationService
      .getEquipes(sportSelected)
      .subscribe((data: Equipe[]) => {
        this.equipes = data;
      });
  }

  // getEquipes( sportSelected: number | undefined,equipeSelected1 : number | undefined) {
  //   this.adminCreationService
  //   .getEquipeById(sportSelected,equipeSelected1)
  //   .subscribe((equipe: Equipe) => {
  //     console.log(equipe);
  //    this.equipe1=equipe
  //   });
  //   console.log(this.equipe1);
  // }

  getEquipe1(sportSelected: number | undefined, equipeId: number | undefined) {
    this.adminCreationService
      .getEquipeById(sportSelected, equipeId)
      .subscribe((equipe: Equipe) => {
        console.log('getEquipe 1 ' + equipe);
        this.equipe1 = equipe;
      });
    console.log(this.equipe1);
  }

  getEquipe2(sportSelected: number | undefined, equipeId: number) {
    this.adminCreationService
      .getEquipeById(sportSelected, equipeId)
      .subscribe((equipe: Equipe) => {
        console.log('getEquipe 2 ' + equipe.nom);
        console.log(equipe);
        this.equipe2 = equipe;
      });
    console.log(this.equipe2);
  }
  submitMatch(
    sportSelected: number | undefined,
    equipeSelected1: number | undefined,
    equipeSelected2: number | undefined
  ) {
    // this.adminCreationService
    //   .getEquipeById(sportSelected, equipeSelected1)
    //   .subscribe((equipe: Equipe) => {
    //     this.equipe1 = equipe;
    //     console.log(this.equipe1.nom);
    //   });
    // this.adminCreationService
    //   .getEquipeById(sportSelected, equipeSelected2)
    //   .subscribe((equipe: Equipe) => {
    //     this.equipe2 = equipe;
    //     console.log(this.equipe2.nom);
    //   });

    // console.log(
    //   'getMatch 1  ' + this.equipe1.id + '       ' + this.equipe1.nom
    // );
    // console.log(
    //   'getmatch 2  ' + this.equipe2.id + '       ' + this.equipe2.nom
    // );

    this.match = {
      id: -1,
      version: 0,
      dateMatch: this.datePipe.transform(
        this.creationMatch.get('dateMatch')?.value,
        'dd/MM/yyyy'
      )!,
      heureMatch: this.creationMatch.get('heureMatch')?.value,

      lieu: this.creationMatch.get('lieu')?.value,
      ville: this.creationMatch.get('ville')?.value,
      pays: this.creationMatch.get('pays')?.value,
      equipes: [
        { id: this.equipe1.id, nom: this.equipe1.nom },
        { id: this.equipe2.id, nom: this.equipe2.nom },
      ],
    };

    this.adminCreationService
      .createMatch(this.match, sportSelected)
      .subscribe((match) => this.samePage());

    this.swalWithBootstrapButtons
      .fire(
        '',
        'Le Match entre ' +
          this.equipe1.nom +
          ' et ' +
          this.equipe2.nom +
          ' a bien été créé.',
        'success'
      )
      .then(() => {
        window.location.reload();
      });
  }
  samePage() {
    this.router.navigate(['/creationSportEquipeMatch']);
  }

  loadMatchs(sportSelected: number | undefined) {
    this.adminCreationService.getMatchs(sportSelected).subscribe((data) => {
      this.matchs = data;
      if (this.matchs.length == 0) {
        this.matchSelected = false;
      }
    });
  }

  onChange(event: Event) {
    if (this.matchSelectCH) {
      this.equipe1 = this.matchSelectCH.equipes[0];
      this.equipe2 = this.matchSelectCH.equipes[1];
      this.matchSelected = true;
    } else {
      this.matchSelected = false;
    }
  }

  createCote(matchSelected: number | undefined) {
    this.cotes = [
      {
        id: -1,
        statut: 'GAGNANT',
        valeur: this.creationCotes.get('valeurE1')?.value,
      },
      (this.coteE2 = {
        id: -1,
        statut: 'PERDANT',
        valeur: this.creationCotes.get('valeurE2')?.value,
      }),
      (this.coteMN = {
        id: -1,
        statut: 'NUL',
        valeur: this.creationCotes.get('valeurMN')?.value,
      }),
    ];

    this.adminCreationService
      .createCote(this.cotes, matchSelected)
      .subscribe((data) => {
        this.cotes = data;
      });
    this.swalWithBootstrapButtons
      .fire('', 'Les cotes ont bien étées saisies', 'success')
      .then(() => {
        window.location.reload();
      });
  }
}
