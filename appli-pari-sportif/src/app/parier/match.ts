import { Time } from '@angular/common';
import { Equipe } from '../equipe-interface/equipe-interface.component';

export interface Match {
  id: number;
  version: number;
  dateMatch: string;
  heureMatch: string;
  lieu: string;
  ville: string;
  pays: string;
  equipes: Equipe[];
}
