import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< Updated upstream

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ParierModule } from './parier/parier.module';
import { PariSportMatchComponent } from './parier/pari-sport-match/pari-sport-match.component';

@NgModule({
  declarations: [
    AppComponent,
    DonneesPariComponent,
    CompteUtilisateurComponent,
    DonneesUtilisateurComponent,
    HistoriquePariFootComponent,
     HistoriquePariRugbyComponent
    // PariSportMatchComponent,

   // LimiteInterfaceComponent
     ],
  imports: [
    BrowserModule,
    ParierModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
>>>>>>> Stashed changes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
