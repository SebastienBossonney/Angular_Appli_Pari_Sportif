import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonneesPariComponent } from './donnees-pari/donnees-pari.component';

const routes: Routes = [
  {path:'donneesPari', component: DonneesPariComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
