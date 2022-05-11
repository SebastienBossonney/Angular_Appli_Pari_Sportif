import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur.model';
import { UserService } from '../utilisateur.service';
import { reservedNameValidator } from './reserved-name.directive';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {

  user!: Utilisateur;


  constructor(
    // private route: ActivatedRoute,
    // private router: Router,
    // private userService: UserService
    private builder: FormBuilder
  ) {}


  loginForm = this.builder.group(
    {
      identifiant : ['', Validators.required],
      email : ['', [Validators.required,Validators.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}")]],
      motDePasse : ['', [Validators.required, Validators.minLength(8)]],
      profil : ['',Validators.required],
      salaire :[''],
    },
  )

  // loginForm = new FormGroup(
  //   {
  //     identifiant : new FormControl(''),
  //     email : new FormControl(''),
  //     motDePasse : new FormControl(''),
  //     profil : new FormControl(''),
  //     salaire : new FormControl(''),
  //   }
  // )

  onSubmit() {
    // this.userService.save(this.user).subscribe((result) => this.gotoUserList());

  }

  gotoUserList() {
    // this.router.navigate(['/utilisateurs']);
  }

  login() {
    const controls = this.loginForm.controls;
    console.log('Identifiant:  ' + controls['identifiant'].value);
    console.log('Email:  ' + controls['email'].value);
    console.log('motDePasse:  ' + controls['motDePasse'].value);
    console.log('profil:  ' + controls['profil'].value);
    console.log('salaire:  ' + controls['salaire'].value);
  }

  get identifiant(): AbstractControl {
    return this.loginForm.controls['identifiant']
  }

  get motDePasse(): AbstractControl {
    return this.loginForm.controls['motDePasse']
  }

  get email(): AbstractControl {
    return this.loginForm.controls['email']
  }
  get profil(): AbstractControl {
    return this.loginForm.controls['profil']
  }
  get salaire(): AbstractControl {
    return this.loginForm.controls['salaire']
  }


}
