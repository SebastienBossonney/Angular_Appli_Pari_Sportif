import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../utilisateur.model';
import { UserService } from '../utilisateur.service'

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {
  utilisateurs: Utilisateur[] | undefined;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.utilisateurs = data;
    });
  }
}
