import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){
    if ( !this.router.url || this.router.url == '/' || this.router.url[1] == '?' )
      return;

    window.location.href = `https://dash.socialdestroyer.org${this.router.url}`;

  }


}
