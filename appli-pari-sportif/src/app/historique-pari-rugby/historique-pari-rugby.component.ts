import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { Pari } from '../parier/pari';
import { PariService } from '../parier/pari.service';
import { UtilisateurService } from '../utilisateur-service.service';

@Component({
  selector: 'app-historique-pari-rugby',
  templateUrl: './historique-pari-rugby.component.html',
  styleUrls: ['./historique-pari-rugby.component.css'],
})
export class HistoriquePariRugbyComponent implements OnInit {
  user!: Utilisateur;
  listPari!: Pari[];
  lesParis: boolean = false;
  utilisateurId!: number;

  constructor(
    private pariService: PariService,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user')!);

    this.pariService.getPariByUtilisateur(user.id).subscribe((data) => {
      this.listPari = data;
    });
  }

  voirParis() {
    if (this.lesParis) {
      this.lesParis = false;
    } else {
      this.lesParis = true;
    }
  }
}
