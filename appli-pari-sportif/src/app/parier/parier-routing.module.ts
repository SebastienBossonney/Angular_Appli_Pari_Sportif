import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PariSportMatchComponent } from './pari-sport-match/pari-sport-match.component';
import { PariSportComponent } from './pari-sport/pari-sport.component';


const routes: Routes = [
  {path: 'sport', component: PariSportComponent,
  children: [
    {path: ':id', component: PariSportMatchComponent}
            ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParierRoutingModule { }
