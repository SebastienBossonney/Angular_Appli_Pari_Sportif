// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-utilisateur',
//   templateUrl: './utilisateur.component.html',
//   styleUrls: ['./utilisateur.component.css']
// })
// export class UtilisateurComponent implements OnInit {

//   utilisateurs!: Utilisateur[];
//   // private heroSub = new Subject<void>();
//   utilisateurs$!:Observable<Utilisateurs[]>
// utilisateur$!: any

//   constructor(private heroService: UtilisateurService) {  }

//     ngOnInit(): void {
//       this.getUtilisateurs()
//     }
//     // ngOnDestroy(){
//     //   this.heroSub.next();
//     //   this.heroSub.complete();
//     // }

//   private getUtilisateurs() {
//     // this.heroService.getHeroes().pipe(map(heroesObservable => this.heroes = heroesObservable),takeUntil(this.heroSub)).subscribe()
//     this.utilisateurs$ = this.utilisateurService.getUtilisateurs()
//   }

//   add(name: string, team: string){
//       // this.heroService.createHero(name,team).subscribe(hero => this.heroes.push(hero));.
//         this.utilisateur$ = this.utilisateurService.createHero(name,team)
//         this.utilisateur$.subscribe()
//         this.getUtilisateurs()
//   }

//   edit(utilisateur:Utilisateur) {
//     const modifiedUtilisateur ={id : utilisateur.id, name : 'Bane', team : 'villains'};
//     const utilisateurs = this.utilisateurs;
//     this.utilisateurService.editHero(utilisateur.id,modifiedUtilisateur)
//     this.utilisateurs$.subscribe(()=>{
//       let test = this.utilisateurs$.find(utilisateur$=>utilisateur$.id==modifiedUtilisateur.id)
//       if(test !== undefined){
//           test.name = modifiedUtilisateur.name
//           }
//         })
// // this.heroService.editHero(hero.id,modifiedHero).subscribe(()=>{
//       // let test = this.heroes.find(hero$=>hero$.id==modifiedHero.id) //hero$ crée  une nouvelle variable
//       // if(test !== undefined){
//       //   test.name = modifiedHero.name
//       // }
//     }


//   remove(utilisateur:Utilisateur) {
//     this.utilisateurService.deleteUtilisateur(utilisateur.id).subscribe(() => {
//       this.utilisateurs = this.utilisateurs.filter(selectUtilisateur => selectUtilisateur !== utilisateur)});
//   }

//   // private findById(hero:Hero,modifiedHero:Hero){
//   //   this.heroes.find(hero => hero.id === modifiedHero.id);
//   // }

// }
