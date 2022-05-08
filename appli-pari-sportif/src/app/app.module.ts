import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    DonneesPariComponent,
    CompteUtilisateurComponent,
    DonneesUtilisateurComponent,
    HistoriquePariFootComponent,
    HistoriquePariRugbyComponent,
    
   // LimiteInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
