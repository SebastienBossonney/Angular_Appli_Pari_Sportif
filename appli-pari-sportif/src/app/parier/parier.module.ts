import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ParierRoutingModule } from './parier-routing.module';
import { PariSportComponent } from './pari-sport/pari-sport.component';
import { PariSportMatchComponent } from './pari-sport-match/pari-sport-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    ParierRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ParierModule { }
