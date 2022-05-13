import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
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
  auth: boolean = false;
  message: string = "Vous n'etes pas connecte";
  loading = false;
  submitted = false;
  user!: Utilisateur;
  userList!: Utilisateur[];
  exist: boolean = false;

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
    console.log(this.form.get('identifiant')?.value, '          ', this.form.get('motDePasse')?.value )
    this.authService.login(this.form.get('identifiant')?.value, this.form.get('motDePasse')?.value)
    .pipe(first())
    .subscribe(
        data => {
          console.log('Connected')
            // this.router.navigate([this.returnUrl]);
            this.loading=true;
        },
        error => {
          console.log('Not connected')
            this.loading = false;
        });
}

      // .subscribe((user: Utilisateur) => {
      //   if (user.id!=null) {
      //     console.log('Connecte');
      //     // this.router.navigate(['/compteUtilisateur']);
      //     this.auth = true;
      //   } else {
      //     console.log('Deconnecte');
      //     this.router.navigate(['/connexion']);
      //     this.auth = false;
      //   }
      // });


  logout() {
    this.authService.logout();
    console.log('Deconnecte');
    this.router.navigate(['/connexion']);
    this.auth = false;
  }
}
