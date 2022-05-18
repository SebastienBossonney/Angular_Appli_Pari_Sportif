import { Match } from './match';

export interface Pari {
  id: number;
  montantJoue: number;
  datePari: string;
  heurePari: string;
  resultat: string;
  montantResultat: number;
  utilisateurId: number;
  coteId: number;
  matchDto: Match;
}
