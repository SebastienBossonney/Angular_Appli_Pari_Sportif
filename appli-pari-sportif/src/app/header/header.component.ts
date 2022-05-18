import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

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
  swalWithBootstrapButtons = Swal.mixin({
    customClass: {
       confirmButton: 'btn btn-success'
                 },
    buttonsStyling: false
  });
  logout() {
    this.authService.logout();
    this.swalWithBootstrapButtons.fire('',"Deconnecté", 'success');
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
