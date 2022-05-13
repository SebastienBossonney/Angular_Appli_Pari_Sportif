import { Equipe } from "../equipe-interface/equipe-interface.component";

export interface Match {
  id : number;
  version : number;
  dateMatch : Date;
  heureMatch : Date;
  lieu:  string;
  ville : string;
	pays : string;

  equipes: Equipe[];
}
