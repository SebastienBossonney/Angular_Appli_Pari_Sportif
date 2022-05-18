import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Utilisateur } from '../utilisateur.model';
import { MotDePasseOublieService } from './mot-de-passe-oublie.service';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.css'],
})
export class MotDePasseOublieComponent {
  user!: Utilisateur;
  alert: Boolean = false;
  constructor(
    private mdpService: MotDePasseOublieService,
    private formBuilder: FormBuilder
  ) {}
  form = this.formBuilder.group({
    email: [''],
  });

  sendEmail() {
    this.mdpService
      .findEmail(this.form.get('email')?.value)
      .subscribe((user: Utilisateur) => {
        if (user.id) {
          var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
          this.alert = true;
        } else {
          console.log('Email incorrect');
        }
      });
  }
  closeAlert() {
    this.alert = false;
  }
}
