import { EmailValidator } from "@angular/forms"
import { RouterLink } from "@angular/router";

export class Utilisateur {

    "id": number;
    "identifiant": String;
    "email": String; 
    "role": String;
    "profil": String;
    "limite":String;
    "motDePasse":String;
    "montantDisponible":number;
    "montantTotalGagne" : number;
    "montantTotalPerdu" : number;
    "salaire" : number;
}
