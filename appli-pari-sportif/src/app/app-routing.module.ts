import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { MotDePasseOublieComponent } from './mot-de-passe-oublie/mot-de-passe-oublie.component';
import { DonneesUtilisateurComponent } from './donnees-utilisateur/donnees-utilisateur.component';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { HistoriquePariFootComponent } from './historique-pari-foot/historique-pari-foot.component';
import { HistoriquePariRugbyComponent } from './historique-pari-rugby/historique-pari-rugby.component';
import { AllUtilisateursComponent } from './all-utilisateurs/all-utilisateurs.component';
import { CompteUtilisateurResolverService } from './compte-utilisateur/compte-utilisateur-resolver';

const routes: Routes = [

  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'motDePasseOublie', component: MotDePasseOublieComponent },
  {path: 'allUtilisateurs', component:AllUtilisateursComponent,
  children: [
    {path:':id', component:CompteUtilisateurComponent
  , resolve:{utilisateur: CompteUtilisateurResolverService}},
    {path:':donneesUtilisateur',component:DonneesUtilisateurComponent},
    { path: ':donneesPari', component: DonneesPariComponent },]},
  {path:'historiquePariFoot',component:HistoriquePariFootComponent},
  {path:'historiquePariRugby',component:HistoriquePariRugbyComponent},
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
