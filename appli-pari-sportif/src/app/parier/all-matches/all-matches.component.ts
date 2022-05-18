import { DatePipe } from '@angular/common';
import { getSafePropertyAccessString } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Match } from '../match';
import { MatchService } from '../match.service';
import { PariSportService } from '../pariSportService';
import { Sport } from '../sport';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css'],
})
export class AllMatchesComponent implements OnInit {
  today: string;
  heure: string;
  matchs!: Match[];
  match!: Match;
  sports!: Sport[];
  sport!: Sport;
  sportId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private matchService: MatchService,
    private datePipe: DatePipe,
    private pariSportService: PariSportService
  ) {
    this.today = this.datePipe.transform(new Date(), 'dd/MM/yyyy')!;
    this.heure = this.datePipe.transform(new Date(), 'HH:mm')!;
  }

  ngOnInit(): void {
    this.getSports();

    this.route.paramMap.subscribe((params) => {
      this.sportId = +params.get('id')!;
      this.matchService.getMatches(this.sportId).subscribe((data) => {
        this.matchs = data;
      });
    });
  }

  getSports() {
    this.pariSportService.getSports().subscribe((data) => {
      this.sports = data;
    });
  }
}
