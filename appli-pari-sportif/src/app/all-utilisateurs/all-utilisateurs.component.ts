import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { UtilisateurService } from '../utilisateur-service.service';

@Component({
  selector: 'app-all-utilisateurs',
  templateUrl: './all-utilisateurs.component.html',
  styleUrls: ['./all-utilisateurs.component.css']
})
export class AllUtilisateursComponent implements OnInit {

  utilisateurs!: Utilisateur[];
  private utilisateurSub = new Subject<void>()
  filteredUtilisateur$!: Observable<Utilisateur[]>;

  identifiant = new FormControl('', Validators.required)
  
  // @Input () visible='';
  

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUtilisateur();
    this.route.queryParamMap.subscribe(params=>{console.log(params.get('sortOrder'));
      })
    this.filteredUtilisateur$ = this.identifiant.valueChanges.pipe(
      map(identifiant=> this.utilisateurs.filter(utilisateur => utilisateur.identifiant.startsWith(identifiant)))
    )
  }

  ngOnDestroy() {
      this.utilisateurSub.next()
      this.utilisateurSub.complete()
  }

   private getUtilisateur() {
    this.utilisateurService.getUtilisateur().pipe(map(utilisateursObservable => this.utilisateurs = utilisateursObservable), takeUntil(this.utilisateurSub)).subscribe()
  }

 
 
 add(utilisateur: Utilisateur) {
    this.utilisateurService.saveUtilisateur(utilisateur).subscribe(utilisateur => this.utilisateurs.push(utilisateur))
  }

 

  // rename
  rename(utilisateur:Utilisateur) {
    // const modificationUtilisateur = {
    //   id:utilisateur.id, 
    //   identifiant: utilisateur.identifiant,
    //   email: utilisateur.email,
    //   motDePasse: utilisateur.motDePasse,
    //   role: utilisateur.role,
    //   profil: utilisateur.profil,
    //   salaire: utilisateur.salaire}
    this.utilisateurService.editUtilisateur(utilisateur.id, utilisateur).subscribe(() => {
      this.utilisateurs.forEach(mec => {
        if(mec.id === utilisateur.id) {
          let index = this.utilisateurs.indexOf(mec)
          this.utilisateurs[index] = utilisateur;
        }
      });
     });
  }
  // remove
  remove(utilisateur: Utilisateur) {
    this.utilisateurService.deleteUtilisateur(utilisateur.id).subscribe(() => {
      this.utilisateurs = this.utilisateurs.filter(selectUtilisateur => selectUtilisateur !== utilisateur) 
    })
  }


}
