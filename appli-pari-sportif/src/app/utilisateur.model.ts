export interface Utilisateur {
	id: number,
  version : number,
  identifiant : string,
	email : string,
  motDePasse : string,
  role : string,
  profil : string,
  montantTotalGagne : number,
  montantTotalPerdu : number,
  salaire : number,
  montantDisponible : number,
}

