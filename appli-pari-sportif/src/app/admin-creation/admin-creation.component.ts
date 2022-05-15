import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Equipe } from '../equipe-interface/equipe-interface.component';
import { EquipeService } from '../equipe.service';
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
  equipe:Equipe | undefined;

  matchSelected: boolean = false;
  constructor(private builder: FormBuilder,private router: Router,private adminCreationService: AdminCreationService) {}


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


  onChange(sportSelected: number | undefined) {
    console.log(sportSelected);
    // this.router.navigateByUrl(`/sport/${sportSelected}`);
  }
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
    this.sport =
    {
      id : -1,
      version : 0,
      nomSport :  this.creationSport.get('nameSport')?.value,
    }
    this.adminCreationService.createSport(this.sport).subscribe((sport) => this.gotoUserList());
    window. location. reload();

  }

  gotoUserList() {
    this.router.navigate(['/creationSportEquipeMatch']);
  }

  submitEquipe(sportSelected: number | undefined) {
      console.log('sport selectionne',sportSelected);
      // this.router.navigateByUrl(`/sport/${sportSelected}`);

    this.equipe =
    {
      id : -1,
      nom :  this.creationEquipe.get('nameEquipe')?.value,
    }
    console.log(this.equipe);

    this.adminCreationService.createEquipe(this.equipe,sportSelected).subscribe((equipe) => this.gotoUserList());
    // window. location. reload();
  }


  submitMatch() {}
}
