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
  user3!: Utilisateur;

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

    this.userService.findAll().subscribe((data) => {


      // this.userList.forEach((user) => {
      //   console.log('identifiant tableau : ', user.identifiant);
      //   console.log('motDePasse tableau : ',user.motDePasse);
      //   console.log('identifiant form : ', this.form.get('identifiant')?.value);
      //   console.log('motDePasse form : ',this.form.get('motDePasse')?.value);
      //   if (
      //     user.identifiant === this.form.get('identifiant')?.value &&
      //     user.motDePasse === this.form.get('motDePasse')?.value
      //   )
      //     this.exist = true;
      // });

    });


    // this.authService
    //   .login(this.name, this.password)
    //   .subscribe((isLogged: boolean) => {
    //     if (isLogged) {
    //       console.log('Connecte');
    //       this.router.navigate(['/compteUtilisateur']);
    //       this.auth = true;
    //     } else {
    //       console.log('Deconnecte');
    //       this.password = '';
    //       this.router.navigate(['/connexion']);
    //       this.auth = false;
    //     }
    //   });
  }

  logout() {
    this.authService.logout();
    console.log('Deconnecte');
    this.router.navigate(['/connexion']);
    this.auth = false;
  }
}
