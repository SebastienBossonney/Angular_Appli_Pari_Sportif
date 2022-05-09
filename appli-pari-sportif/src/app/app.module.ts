import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';

import { PariComponent } from './pari/pari.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DonneesPariComponent,
    CompteUtilisateurComponent,
    DonneesUtilisateurComponent,
    HistoriquePariFootComponent,
    HistoriquePariRugbyComponent,

   // LimiteInterfaceComponent
    PariComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
