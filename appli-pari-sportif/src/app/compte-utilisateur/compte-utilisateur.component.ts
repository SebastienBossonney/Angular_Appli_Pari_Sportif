import { Component, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { Utilisateur } from '../donnees-utilisateur/utilisateur';
import { UtilisateurService} from '../utilisateur-service.service';

@Component({
  selector: 'app-compte-utilisateur',
  templateUrl: './compte-utilisateur.component.html',
  styleUrls: ['./compte-utilisateur.component.css']
})
export class CompteUtilisateurComponent implements OnInit {

  // @Output('rendrevisible') 
  currentVisible: boolean = false;


  utilisateur!:Utilisateur;
  limiteArg=false;//Pour le bouton modifier de limite d'argent
  salaire=false; //Pour le bouton modifier le salaire
  risque=false;//Pour le bouton modifier le seuil de risque 
  mdp=false;//Pour le bouton modifier le mot de passe 
  email=false;//Pour le bouton modifier l'email 
  utilisateurs!:Utilisateur[];
  utilisateurProfilSelect:any;
  selectDefaultValue:any;


  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute, private builder: FormBuilder, private router:Router)  {}

  ngOnInit(){
  this.getUtilisateurById()
  this.utilisateur=this.route.snapshot.data['utilisateur']
  }

  emailForm= this.builder.group({
    //nouvelEmail = formControlName='nouvelEmail'
    nouvelEmail: [
          '',
          [
            Validators.required,
            Validators.pattern('[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}'),
          ],
        ],
  })

 limiteForm= this.builder.group({
    nouvelleLimite: ['', [Validators.maxLength(4)]],
  })

  salaireForm= this.builder.group({
    nouveauSalaire: ['', [Validators.maxLength(4)]],
  })

  motDePasseForm= this.builder.group({
    nouveauMotDePasse: ['', [Validators.required, Validators.minLength(8)]],
    
  })

  confirmMotDePasseForm=this.builder.group({
    confirmMotDePasse: ['', [Validators.required, Validators.minLength(8)]],
    
  })

  getUtilisateurById(){
    this.route.paramMap.pipe(switchMap((params:ParamMap)=>{
      const id = +params.get('id')!;
      const user = this.utilisateurService.getUtilisateurById(id);
      return user
    }),map(utilisateur => this.utilisateur= utilisateur)
    ).subscribe()
  }

  editEmail(){
    console.log(JSON.stringify(this.utilisateur))
    this.utilisateur= {
      id: this.utilisateur.id,
      identifiant: this.utilisateur.identifiant,
      email: this.emailForm.get('nouvelEmail')?.value,
      motDePasse: this.utilisateur.motDePasse,
      limite: this.utilisateur.limite,
      role: 'PARIEUR',
      profil: this.utilisateur.profil,
      montantTotalGagne: this.utilisateur.montantTotalGagne,
      montantTotalPerdu: this.utilisateur.montantTotalPerdu,
      salaire: this.utilisateur.salaire,
      montantDisponible: this.utilisateur.montantDisponible,
    };
    this.utilisateurService
      .editUtilisateur(this.utilisateur.id, this.utilisateur)
      .subscribe((utilisateur) => this.gotoUtilisateurCompte());
  }


   editLimite(){
    console.log(JSON.stringify(this.utilisateur))
    this.utilisateur= {
      id: this.utilisateur.id,
      identifiant: this.utilisateur.identifiant,
      email: this.utilisateur.email,
      motDePasse: this.utilisateur.motDePasse,
      limite: this.limiteForm.get('nouvelleLimite')?.value,
      role: 'PARIEUR',
      profil: this.utilisateur.profil,
      montantTotalGagne: this.utilisateur.montantTotalGagne,
      montantTotalPerdu: this.utilisateur.montantTotalPerdu,
      salaire: this.utilisateur.salaire,
      montantDisponible: this.utilisateur.montantDisponible,
    };

    
    this.utilisateurService
      .editUtilisateur(this.utilisateur.id, this.utilisateur)
      .subscribe((utilisateur) => this.gotoUtilisateurCompte());
  }



  editSalaire(){
    console.log(JSON.stringify(this.utilisateur))
    this.utilisateur= {
      id: this.utilisateur.id,
      identifiant: this.utilisateur.identifiant,
      email: this.utilisateur.email,
      motDePasse: this.utilisateur.motDePasse,
      limite: this.utilisateur.limite,
      role: 'PARIEUR',
      profil: this.utilisateur.profil,
      montantTotalGagne: this.utilisateur.montantTotalGagne,
      montantTotalPerdu: this.utilisateur.montantTotalPerdu,
      salaire: this.salaireForm.get('nouveauSalaire')?.value,
      montantDisponible: this.utilisateur.montantDisponible,
    };
    this.utilisateurService
      .editUtilisateur(this.utilisateur.id, this.utilisateur)
      .subscribe((utilisateur) => this.gotoUtilisateurCompte());
  }

  editMotDePasse(){
    console.log(JSON.stringify(this.utilisateur))
    this.utilisateur= {
      id: this.utilisateur.id,
      identifiant: this.utilisateur.identifiant,
      email: this.utilisateur.email,
      motDePasse: this.motDePasseForm.get('nouveauMotDePasse')?.value,
      limite: this.utilisateur.limite,
      role: 'PARIEUR',
      profil: this.utilisateur.profil,
      montantTotalGagne: this.utilisateur.montantTotalGagne,
      montantTotalPerdu: this.utilisateur.montantTotalPerdu,
      salaire: this.utilisateur.salaire,
      montantDisponible: this.utilisateur.montantDisponible,
    };

    
    this.utilisateurService
      .editUtilisateur(this.utilisateur.id, this.utilisateur)
      .subscribe((utilisateur) => this.gotoUtilisateurCompte());
  }
 
 gotoUtilisateurCompte() {
    this.router.navigate(['/allUtilisateurs']);
 }

   changeLimite() { //Pour le bouton modifier de limite d'argent
    if(this.limiteArg) {
      this.limiteArg=false;
    } else {
      this.limiteArg= true;
    }
  }
  
  changeSalaire() {
    if (this.salaire){
      this.salaire=false;
    } else {
      this.salaire= true;
    }

    }

    changeRisque() {
    if (this.risque){
      this.risque=false;
    } else {
      this.risque= true;
    }
    }

    changeProfil(utilisateurProfilSelect:string){
    }

    changeMdp() { //Pour le bouton modifier de limite d'argent
    if(this.mdp) {
      this.mdp=false;
    } else {
      this.mdp= true;
    }
  }
  
  changeEmail() { //Pour le bouton modifier de limite d'argent
    if(this.email) {
      this.email=false;
    } else {
      this.email= true;
    }
  }
  // modif (){
  //   const controls = this.utilisateurForm.controls
  // }
  // get identifiant(): AbstractControl {
  //   return this.utilisateurForm.controls['identifiant'];
  // }
  // get motDePasse(): AbstractControl {
  //   return this.utilisateurForm.controls['motDePasse'];
  // }

  // get limite(): AbstractControl {
  //   return this.utilisateurForm.controls['motDePasse'];
  // }

  // get email(): AbstractControl {
  //   return this.utilisateurForm.controls['email'];
  // }
  // get profil(): AbstractControl {
  //   return this.utilisateurForm.controls['profil'];
  // }
  // get salaire(): AbstractControl {
  //   return this.utilisateurForm.controls['salaire'];
  // }
}



