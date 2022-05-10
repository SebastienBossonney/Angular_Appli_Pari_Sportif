import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from '../utilisateur.model';
import { UserService } from '../utilisateur.service';

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
  ) {}

  onSubmit() {
    // this.userService.save(this.user).subscribe((result) => this.gotoUserList());

  }

  gotoUserList() {
    // this.router.navigate(['/utilisateurs']);
  }
}
