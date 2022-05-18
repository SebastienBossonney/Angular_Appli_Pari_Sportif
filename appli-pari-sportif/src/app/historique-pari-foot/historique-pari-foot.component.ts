import { Component, OnInit } from '@angular/core';
import { Pari } from '../parier/pari';
import { PariService } from '../parier/pari.service';
import { UtilisateurService } from '../utilisateur-service.service';
import { Utilisateur } from '../utilisateur.model';

@Component({
  selector: 'app-historique-pari-foot',
  templateUrl: './historique-pari-foot.component.html',
  styleUrls: ['./historique-pari-foot.component.css']
})
export class HistoriquePariFootComponent implements OnInit {

  user!: Utilisateur;
  listPari!: Pari[];

  constructor(private pariService: PariService, private utilisateurService: UtilisateurService) { }

  ngOnInit(): void {

    const user =  JSON.parse(sessionStorage.getItem("user")!);

    this.pariService.getPariByUtilisateur(user.id).subscribe(data => {this.listPari = data;
    console.log("je suis dedans");
    console.log(this.listPari.length);});
  }



}
