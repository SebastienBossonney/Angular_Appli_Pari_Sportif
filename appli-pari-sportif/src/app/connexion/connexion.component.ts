import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../utilisateur.service';
import { AuthService } from '../auth.service';
import { Utilisateur } from '../utilisateur.model';
import { first } from 'rxjs';
import Swal from 'sweetalert2';

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

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
       confirmButton: 'btn btn-success'
                 },
    buttonsStyling: false
  });

  submit() {
    this.authService
      .login(
        this.form.get('identifiant')?.value,
        this.form.get('motDePasse')?.value
      )
      .subscribe((user: Utilisateur) => {
        this.swalWithBootstrapButtons.fire('', user.identifiant+ " Bienvenue à Bet Healthier", 'success');
        if (sessionStorage.getItem('user')) {
          var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');

          console.log('entre');
          this.router.navigate(['utilisateur' + '/' + userInfo?.id]).then(() => {
            window.location.reload();
          });
          console.log('Connecte');
        } else {
          this.swalWithBootstrapButtons.fire('', "Les credentiales ne sont pas correct", 'error');
          console.log('Mauvais identifiant');
          this.router.navigate(['/connexion']);
        }
      });
  }


  inscription(){
    this.router.navigate(['/inscription'])
  }
}

