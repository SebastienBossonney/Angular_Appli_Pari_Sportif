import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';
import { Utilisateur } from '../utilisateur.model';
import { MotDePasseOublieService } from './mot-de-passe-oublie.service';

@Component({
  selector: 'app-mot-de-passe-oublie',
  templateUrl: './mot-de-passe-oublie.component.html',
  styleUrls: ['./mot-de-passe-oublie.component.css'],
})
export class MotDePasseOublieComponent {
  user!: Utilisateur;
  constructor(
    private mdpService: MotDePasseOublieService,
    private formBuilder: FormBuilder
  ) {}
  form = this.formBuilder.group({
    email: [''],
  });

  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
       confirmButton: 'btn btn-success'
                 },
    buttonsStyling: false
  });

  sendEmail() {
    console.log('test')
    this.mdpService
      .findEmail(this.form.get('email')?.value)
      .subscribe((user: Utilisateur) => {
        if (user.id)
        {
          var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
        }
        this.swalWithBootstrapButtons.fire('',"Vous recevrez un mail si l'email est correct", 'error');
      });
  }

}
