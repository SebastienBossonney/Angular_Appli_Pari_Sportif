import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable, map, takeUntil } from 'rxjs';
import { UtilisateurService } from '../utilisateur-service.service';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';

@Component({
  selector: 'app-afficher-all-users',
  templateUrl: './afficher-all-users.component.html',
  styleUrls: ['./afficher-all-users.component.css']
})
export class AfficherAllUsersComponent implements OnInit {

  utilisateurs!: Utilisateur[];
  private utilisateurSub = new Subject<void>()
  filteredUtilisateur$!: Observable<Utilisateur[]>;

  identifiant = new FormControl('', Validators.required)



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
}
