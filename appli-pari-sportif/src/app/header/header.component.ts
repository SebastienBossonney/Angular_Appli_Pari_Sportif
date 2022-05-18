import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  role: string | undefined;
  montantDisponible: number | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.role = userInfo?.role;
    this.montantDisponible = userInfo?.montantDisponible;
  }

  logout() {
    this.authService.logout();
    console.log('Deconnecte');
    this.router.navigate(['/connexion']).then(() => {
      window.location.reload();
    });
  }

  directionCreation() {
    this.router.navigate(['/creationSportEquipeMatch']);
  }

  directionModifierInformation() {
    var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.router.navigate(['utilisateur' + '/' + userInfo?.id]);
  }

  directionAllUsers() {
    this.router.navigate(['/allUsers']);
  }
  directionParier() {
    this.router.navigate(['/sport']);
  }
}
