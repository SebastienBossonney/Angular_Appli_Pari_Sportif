import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
// import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConnexionComponent,
    InscriptionComponent,
    UtilisateurListComponent,
    MotDePasseOublieComponent,
    PageNotFoundComponent,
    DonneesPariComponent,
    // CompteUtilisateurComponent,
    DonneesUtilisateurComponent,
    HistoriquePariFootComponent,
    HistoriquePariRugbyComponent,
    CompteUtilisateurComponent,

   // LimiteInterfaceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
