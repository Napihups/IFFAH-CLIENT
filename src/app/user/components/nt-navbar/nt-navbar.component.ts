import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportService } from '../../../services/passport.service';

@Component({
  selector: 'nt-navbar',
  templateUrl: './nt-navbar.component.html',
  styleUrls: ['./nt-navbar.component.css']
})
export class NtNavbarComponent implements OnInit {


	/** ---------- states variables ------------------*/
  account_holder: string = " ";
  /** ----------------------------------------------*/

  constructor(
  			private Passport : PassportService, 
  			private Router : Router
  ) { }

  ngOnInit() {
  	this.account_holder = this.Passport.getUserSession().username;
  }

  doLogout(){
  	this.Passport.clearSessionData();
  	this.Router.navigate(['/login']);
  }

}
