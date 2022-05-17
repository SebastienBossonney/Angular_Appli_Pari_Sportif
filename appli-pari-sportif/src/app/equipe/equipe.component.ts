import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { EquipeService } from '../equipe.service';
import { map, Observable, Subject, switchMap, takeUntil } from 'rxjs';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { PariSportService } from '../parier/pariSportService';
import { Sport } from '../sport';
import { getSafePropertyAccessString } from '@angular/compiler';
import { FormBuilder, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-equipe',
  templateUrl: './equipe.component.html',
  styleUrls: ['./equipe.component.css'],
})
export class EquipeComponent implements OnInit {
  equipe!: Equipe;
  equipes!: Equipe[];
  sport!: Sport;
  sports!: Sport[];
  sportId!: number;
  private sportSub = new Subject<void>();
  selectDefaultValue: any;
  sportSelect!: any;
  s!: Sport;
  sportSelected: boolean = false;
  choixEquipe: boolean = false;
  // modifEquip: boolean=false;
  equipeId!: number;
  newEquipe: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private equipeService: EquipeService,
    private pariSportService: PariSportService,
    private builder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.pariSportService.getSports().subscribe((data) => {
      this.sports = data;
    });
  }
  equipeForm = this.builder.group({
    nouvelleEquipe: ['', [Validators.required]],
  });

  onChange(sportId: number) {
    this.sportId = sportId;
    console.log(this.sportId);

    this.equipeService.getEquipes(sportId).subscribe((data) => {
      this.equipes = data;
      this.sportSelected = true;
      console.log(this.equipes);
    });
  }

  editEquipes(equipeId: number) {
    const modifiedHero = {
      id: equipeId,
      nom: this.equipeForm.get('nouvelleEquipe')?.value,
    };
    this.equipeService
      .editEquipes(this.sportId, equipeId, modifiedHero)
      .subscribe(() => {
        this.equipes.forEach((mec) => {
          if (mec.id === equipeId) {
            let index = this.equipes.indexOf(mec);
            this.equipes[index] = modifiedHero;
          }
        });
      });
  }

  gotoEquipeAll(sportId: number) {
    var equipeInfo = JSON.parse(sessionStorage.getItem('equipe') || '{}');
    this.router.navigate(['/sport' + '/' + sportId + '/equipes-all']);
  }

  changeEquipe(equipeId: number) {
    this.equipeId = equipeId;

    console.log(this.equipeId);

    if (this.choixEquipe) {
      this.choixEquipe = false;
    } else {
      this.choixEquipe = true;
    }
  }

  ajoutEquipe() {
    if (this.newEquipe) {
      this.newEquipe = false;
    } else {
      this.newEquipe = true;
    }
  }

  saveEquipe(sportId: number, equipe: Equipe) {
    this.sportId = sportId;

    equipe = {
      id: Number(uuidv4()),
      nom: this.equipeForm.get('nouvelleEquipe')?.value,
    };

    this.equipeService
      .saveEquipe(this.sportId, equipe)
      .subscribe((equipe) => this.equipes.push(equipe));

    var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.router.navigate(['sports' + this.sportId + '/equipes']);
  }

  onDelete(equipeId: number) {
    this.equipe = {
      id: equipeId,
      nom: this.equipe?.nom,
    };
    this.equipeService.deleteEquipe(this.sportId, equipeId).subscribe(() => {
      this.equipes = this.equipes.filter(
        (selectEquipe) => selectEquipe !== this.equipe
      );
    });
  }
}
