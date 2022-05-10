import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


const heroes=[
{
  id:1,
  name:'Spiderman',
  team: 'avengers'
},{
  id:2,
  name:'Thor',
  team:'avengers'
},{
  id:3,
  name: 'Batman',
  team:'Justice'
},{
  id:4,
  name:'CatWomen',
  team:'Justice'
},{
  id:5,
  name:'Pinguin',
  team:'villains'
}
]


// export function reservedNameValidator(): ValidatorFn{
//   return (control: AbstractControl): {[key: string]:boolean} | null => {
//    const reserved = heroes.find(hero => hero.name === control.value)
//     return reserved ? {'reservedName':true} : null
//   }
// }

export function reservedNameValidator(control:AbstractControl): ValidationErrors | null{
   const reserved = heroes.find(hero => hero.name === control.value)
    return reserved ? {'reservedName':true} : null
}