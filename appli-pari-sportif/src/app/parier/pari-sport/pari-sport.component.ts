import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PariSportService } from '../pariSportService';
import { Sport } from '../sport';


@Component({
  selector: 'app-pari',
  templateUrl: './pari-sport.component.html',
  styleUrls: ['./pari-sport.component.css']
})
export class PariSportComponent implements OnInit {

  sports!: Sport[];
  selectDefaultValue : any;
  s! : Sport;

  //selectedDevice! : Sport;

    constructor(private pariSportService : PariSportService, private route: ActivatedRoute) {

    }

  ngOnInit(): void {
     this.pariSportService.getSports().subscribe(data => {this.sports = data});
  }

  onChange(event : any | undefined) {
    console.log(event.target.value);
    //this.router.
    //this.selectedDevice = event;
}

}
