import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { PariSportComponent } from './parier/pari-sport/pari-sport.component';
import { PariSportMatchComponent } from './parier/pari-sport-match/pari-sport-match.component';

const routes: Routes = [

  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'motDePasseOublie', component: MotDePasseOublieComponent },
  { path: 'donneesPari', component: DonneesPariComponent },
  { path:'donneesUtilisateur',component:DonneesUtilisateurComponent},
  { path:'compteUtilisateur',component:CompteUtilisateurComponent},
   {path: 'sport', component: PariSportComponent,
     children: [
     {path: ':id', component: PariSportMatchComponent}
             ]
   },
  { path: 'sport', component: PariSportComponent},
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
