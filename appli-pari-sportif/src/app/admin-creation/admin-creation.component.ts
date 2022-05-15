import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  s!: Sport;
  sportSelect: any;

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
    this.router.navigateByUrl(`/sport/${sportSelected}`);
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

  submitSport() {}
  submitEquipe(id : String) {
    createSport
  }
  submitMatch() {}
}
