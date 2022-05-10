import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteUtilisateurComponent } from './compte-utilisateur/compte-utilisateur.component';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'donneesPari', component: DonneesPariComponent},
  {path:'compteUtilisateur', component: CompteUtilisateurComponent},
  {path:'compteUtilisateur', component: CompteUtilisateurComponent},
  {path:'**', component: PageNotFoundComponent},
  {path: '', redirectTo:'/sport', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
