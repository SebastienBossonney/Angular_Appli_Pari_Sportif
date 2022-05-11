import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneesPariComponent } from '../donnees-pari/donnees-pari.component';
import { DonneesUtilisateurComponent } from '../donnees-utilisateur/donnees-utilisateur.component';


const routes: Routes = [

  {path: 'donneesPari', component: DonneesPariComponent },
  {path:'donneesUtilisateur',component:DonneesUtilisateurComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
