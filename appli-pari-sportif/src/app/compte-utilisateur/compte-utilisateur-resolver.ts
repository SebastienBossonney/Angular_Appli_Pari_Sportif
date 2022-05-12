import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { mergeMap, Observable, of, take } from "rxjs";
import { Utilisateur } from "../donnees-utilisateur/utilisateur";
import { UtilisateurService } from "../utilisateur-service.service";


@Injectable({
    providedIn: 'root'
})
export class CompteUtilisateurResolverService implements Resolve<Utilisateur> {
    constructor(private utilisateurService: UtilisateurService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Utilisateur> {
        const id = +route.paramMap.get('id')!;
        return this.utilisateurService.getUtilisateurById(id).pipe(
            take(1),
            mergeMap(utilisateur => of(utilisateur))
        )
    }
}