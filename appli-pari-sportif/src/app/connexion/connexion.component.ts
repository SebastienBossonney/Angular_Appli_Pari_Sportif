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
        if (sessionStorage.getItem('user')) {
          var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
          this.router.navigate(['utilisateur' + '/' + userInfo?.id]);
          console.log('Connecte');
        } else {
          console.log('Mauvais identifiant');
          this.router.navigate(['/connexion']);
        }
      });
  }

  mdpOublie(){
    this.router.navigate(['/motDePasseOublie'])
  }
}
