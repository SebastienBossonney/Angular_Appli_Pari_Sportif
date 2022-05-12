import { EmailValidator } from "@angular/forms"
import { RouterLink } from "@angular/router";

export class Utilisateur {

    "id": number;
    "identifiant": string;
    "email": string;
    "role": string;
    "profil": string;
    "motDePasse":string;
    "montantDisponible":number;
    "salaire": number;
    "montantTotalGagne" : number;
    "montantTotalPerdu" : number;
}
