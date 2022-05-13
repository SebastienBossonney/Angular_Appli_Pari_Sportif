import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../utilisateur.service';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../utilisateur.model';
import { first } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  user!: Utilisateur;
  userList!: Utilisateur[];

  constructor(
    // private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}
  form = this.formBuilder.group({
    identifiant: [''],
    motDePasse: [''],
  });

  submit() {
    this.authService
      .login(
        this.form.get('identifiant')?.value,
        this.form.get('motDePasse')?.value
      )
      .subscribe((user: Utilisateur) => {
        if (localStorage.getItem('user')) {
          var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
          this.router.navigate(['/allUtilisateurs' + '/' + userInfo.id]);
          console.log('Connecte');
        } else {
          console.log('Mauvais identifiant');
          this.router.navigate(['/connexion']);
        }
      });
  }
}
