import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';

import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
import { AllUtilisateursComponent } from './all-utilisateurs/all-utilisateurs.component';



import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { PariSportComponent } from './parier/pari-sport/pari-sport.component';
import { PariSportMatchComponent } from './parier/pari-sport-match/pari-sport-match.component';
import { AdminCreationComponent } from './admin-creation/admin-creation.component';
import { AllMatchesComponent } from './parier/all-matches/all-matches.component';
import { EquipeComponent } from './equipe/equipe.component';



const routes: Routes = [

  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'motDePasseOublie', component: MotDePasseOublieComponent },
  {path: 'utilisateur', component:AllUtilisateursComponent,
  children: [
    {path:':id', component:CompteUtilisateurComponent}]},
  {path:'historiquePariFoot',component:HistoriquePariFootComponent},
  {path:'matchs-all',component:AllMatchesComponent},
  {path:'historiquePariRugby',component:HistoriquePariRugbyComponent},
  {path:'equipes-all',component:EquipeComponent},
  {path:'creationSportEquipeMatch',component:AdminCreationComponent,
  children: [
    {path: ':id', component: PariSportMatchComponent}]},
  {path: 'sport', component: PariSportComponent,
  children: [
    {path: ':id', component: PariSportMatchComponent},
            ]},
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
