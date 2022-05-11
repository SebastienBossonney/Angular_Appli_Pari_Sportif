import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';


//import { LimiteInterfaceComponent } from './donnees-pari/limite-interface.component';


import { PariComponent } from './pari/pari.component';
import { CommonModule } from '@angular/common';
import { AllUtilisateursComponent } from './all-utilisateurs/all-utilisateurs.component';




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
    PariComponent,

    CompteUtilisateurComponent,
    AllUtilisateursComponent,


   // LimiteInterfaceComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    CommonModule,
    HttpClientModule,

    FormsModule,
    ReactiveFormsModule

  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
