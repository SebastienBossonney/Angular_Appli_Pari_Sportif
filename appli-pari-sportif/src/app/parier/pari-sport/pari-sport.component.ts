import { Component, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PariSportService } from '../pariSportService';
import { Sport } from '../sport';

@Component({
  selector: 'app-pari',
  templateUrl: './pari-sport.component.html',
  styleUrls: ['./pari-sport.component.css'],
})
export class PariSportComponent implements OnInit {
  sports!: Sport[];
  selectDefaultValue: any;
  s!: Sport;
  sportSelect: any;

  //selectedDevice! : Sport;

  constructor(
    private pariSportService: PariSportService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pariSportService.getSports().subscribe((data) => {
      this.sports = data;
    });
  }

  onChange(sportSelected: number | undefined) {
    console.log(sportSelected);
    this.router.navigateByUrl(`/sport/${sportSelected}`);
  }
}
