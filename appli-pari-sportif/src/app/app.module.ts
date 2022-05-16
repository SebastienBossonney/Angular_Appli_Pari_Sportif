import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';
import { CommonModule, DatePipe } from '@angular/common';
import { AllUtilisateursComponent } from './all-utilisateurs/all-utilisateurs.component';
import { UserService } from './utilisateur.service';
import { AuthService } from './auth.service';
import { AvertissementComponent } from './avertissement/avertissement.component';

import { HeaderComponent } from './header/header.component';
import { ParierModule } from './parier/parier.module';

import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { PariSportComponent } from './parier/pari-sport/pari-sport.component';
import { PariSportMatchComponent } from './parier/pari-sport-match/pari-sport-match.component';
import { AdminCreationComponent } from './admin-creation/admin-creation.component';
import { AllMatchesComponent } from './parier/all-matches/all-matches.component';



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
    DonneesUtilisateurComponent,
    HistoriquePariFootComponent,
    HistoriquePariRugbyComponent,

    // LimiteInterfaceComponent

    CompteUtilisateurComponent,
    AllUtilisateursComponent,
    AvertissementComponent,
    PariSportComponent,
     PariSportMatchComponent,
     AdminCreationComponent,
     AllMatchesComponent

    // LimiteInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ParierModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpClientModule, UserService, AuthService, DatePipe ],
  bootstrap: [AppComponent],
})
export class AppModule {}
