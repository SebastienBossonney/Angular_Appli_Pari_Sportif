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
import { Match } from '../parier/match';
import { MatchService } from '../parier/match.service';
import { PariService } from '../parier/pari.service';
import { Sport } from '../sport';
import { AdminCreationService } from './admin-creation.service';

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
  today: string;
  heure: string;
  equipes!: Equipe[];

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
  ) {
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy')!;
    this.heure = this.datePipe.transform(new Date(), 'HH:mm')!;
  }

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

  submitSport() {
    this.sport = {
      id: -1,
      version: 0,
      nomSport: this.creationSport.get('nameSport')?.value,
    };
    this.adminCreationService
      .createSport(this.sport)
      .subscribe((sport) => this.samePage());
    window.location.reload();
  }

  submitEquipe(sportSelected: number | undefined) {
    this.equipe = {
      id: -1,
      nom: this.creationEquipe.get('nameEquipe')?.value,
    };

    this.adminCreationService
      .createEquipe(this.equipe, sportSelected)
      .subscribe((equipe) => this.samePage());
    window.location.reload();
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
    this.adminCreationService
      .getEquipeById(sportSelected, equipeSelected1)
      .subscribe((equipe: Equipe) => {
        this.equipe1 = equipe;
        console.log(this.equipe1.nom);
      });
    this.adminCreationService
      .getEquipeById(sportSelected, equipeSelected2)
      .subscribe((equipe: Equipe) => {
        this.equipe2 = equipe;
        console.log(this.equipe2.nom);
      });

    console.log(
      'getMatch 1  ' + this.equipe1.id + '       ' + this.equipe1.nom
    );
    console.log(
      'getmatch 2  ' + this.equipe2.id + '       ' + this.equipe2.nom
    );
    this.match = {
      id: -1,
      version: 0,
      dateMatch: this.creationMatch.get('dateMatch')?.value,
      heureMatch: this.creationMatch.get('heureMatch')?.value,
      lieu: this.creationMatch.get('lieu')?.value,
      ville: this.creationMatch.get('ville')?.value,
      pays: this.creationMatch.get('pays')?.value,
      equipes: [
        { id: this.equipe1.id, nom: this.equipe1.nom },
        { id: this.equipe2.id, nom: this.equipe2.nom },
      ],
    };
    console.log(this.match);
    this.adminCreationService
      .createMatch(this.match, sportSelected)
      .subscribe((match) => this.samePage());
  }
  samePage() {
    this.router.navigate(['/creationSportEquipeMatch']);
  }
}
