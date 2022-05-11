import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PariService } from '../pari.service';
import { Sport } from '../sport';
//import {sports} from 'localhost:8080/sports';

@Component({
  selector: 'app-pari',
  templateUrl: './pari.component.html',
  styleUrls: ['./pari.component.css']
})
export class PariComponent implements OnInit {

  sports!: Sport[];
  selectDefaultValue : any;
  s! : Sport;
  //selectedDevice! : Sport;

    constructor(private pariService : PariService) {

    }

  ngOnInit(): void {
    this.pariService.getSports().subscribe(data => {
      this.sports =data;
    });
  }

  onChange(event : any | undefined) {
    console.log(event.target.value);

    //this.selectedDevice = event;
}

}
