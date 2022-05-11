import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pari-sport-match',
  templateUrl: './pari-sport-match.component.html',
  styleUrls: ['./pari-sport-match.component.css']
})
export class PariSportMatchComponent implements OnInit {

  sportId: number | undefined;
  private sub: any;

  constructor( private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  this.sub = this.route.params.subscribe(params => {
      this.sportId = +params['id']; // (+) converts string 'id' to a number
    });
  }

}
