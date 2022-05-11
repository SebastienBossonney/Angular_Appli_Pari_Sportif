import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParierRoutingModule } from './parier-routing.module';
import { PariSportComponent } from './pari-sport/pari-sport.component';
import { PariSportMatchComponent } from './pari-sport-match/pari-sport-match.component';


@NgModule({
  declarations: [
    PariSportComponent,
    PariSportMatchComponent
  ],
  imports: [
    CommonModule,
    ParierRoutingModule
  ]
})
export class ParierModule { }
