import { Component, OnInit, Output } from '@angular/core';
import {  FormBuilder, FormGroup,  Validators } from '@angular/forms';
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



  utilisateurs$!: Utilisateur[]
  utilisateur!:Utilisateur;
  limiteArg=false;//Pour le bouton modifier de limite d'argent
  salaire=false; //Pour le bouton modifier le salaire
  risque=false;//Pour le bouton modifier le seuil de risque 
  mdp=false;//Pour le bouton modifier le mot de passe 
  email=false;//Pour le bouton modifier l'email 
  utilisateurs!:Utilisateur[];
  utilisateurProfilSelect:any;
  selectDefaultValue:any;
  submitted = false;
  
  

  constructor(private utilisateurService: UtilisateurService, private route: ActivatedRoute, private builder: FormBuilder, private router:Router)  {}

 
  ngOnInit(){
  this.getUtilisateurById();
 
  
  }

  get nouveauMotDePasse(){
    return this.motDePasseForm.get('nouveauMotDePasse')
  }

  get confirmeMotDePasse(){
    return this.motDePasseForm.get('confirmeMotDePasse')
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

  profilForm= this.builder.group({
    nouveauProfil: ['',[Validators.required]],
  })
 
  motDePasseForm= this.builder.group({
    nouveauMotDePasse: ['', [Validators.required, Validators.minLength(8)]],
    confirmeMotDePasse: ['', [Validators.required, Validators.minLength(8)]],
    ancienMotDePasse:['', [Validators.required]],
    
  }, 
  {validators: this.checkPassword})



 checkPassword(group: FormGroup){
   let pass= group.controls.nouveauMotDePasse.value//nouveauMotDePasse.value;
   let confirmPass = group.controls.confirmeMotDePasse.value;

  return pass === confirmPass ? null : { notSame: true}

 }
  
 

 
 submit(){
    console.log(this.motDePasseForm.value);
  }

  get f() {return this.motDePasseForm.controls;}

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
    
    this.submitted = true;
       if(this.motDePasseForm.get('ancienMotDePasse')?.value===this.utilisateur.motDePasse){
         
        // stop here if form is invalid
        if (this.motDePasseForm.invalid) {
            return;
        }else{

          
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
        } else{
   return ;
    
  }
  }

  editProfil(){
    console.log(JSON.stringify(this.utilisateur))
    this.utilisateur= {
      id: this.utilisateur.id,
      identifiant: this.utilisateur.identifiant,
      email: this.utilisateur.email,
      motDePasse: this.utilisateur.motDePasse,
      limite: this.utilisateur.limite,
      role: 'PARIEUR',
      profil: this.profilForm.get('nouveauProfil')?.value,
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
    var userInfo = JSON.parse(sessionStorage.getItem('user') || '{}');
    this.router.navigate(['/utilisateur' + '/' + userInfo.id]);
    this.onReset();
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
    }}

    changeProfil(utilisateurProfilSelect:string){
    }

    changeMdp() { //Pour le bouton modifier de limite d'argent
    if(this.mdp) {
      this.mdp=false;
    } else {
      this.mdp= true;
    }}
  
  changeEmail() { //Pour le bouton modifier de limite d'argent
    if(this.email) {
      this.email=false;
    } else {
      this.email= true;
    }}

   
  onReset() {
        this.submitted= false;
        this.emailForm.reset();
        this.limiteForm.reset();
        this.salaireForm.reset();
        this.motDePasseForm.reset();
        this.profilForm.reset();
    }
  
 

}

