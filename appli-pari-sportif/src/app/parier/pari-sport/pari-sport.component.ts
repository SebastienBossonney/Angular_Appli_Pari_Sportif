import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PariSportService } from '../../pari-sport.service';
import { Sport } from '../../sport';
//import {sports} from 'localhost:8080/sports';

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
     this.pariSportService.getSports().subscribe(data => {
       this.sports = data});
  }

  onChange(event : any | undefined) {
    console.log(event.target.value);

    //this.selectedDevice = event;
}

}
