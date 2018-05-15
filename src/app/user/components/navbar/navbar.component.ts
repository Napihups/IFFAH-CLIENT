import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassportService } from '../../../services/passport.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /** ---------- states variables ------------------*/
  account_holder: string = " ";
  /** ----------------------------------------------*/

  constructor(
  		private Router: Router,
  		private PassportService : PassportService
  ) { }

  ngOnInit() {
    this.account_holder = this.PassportService.getUserSession().username;
  }


  doLogout(){
  	this.PassportService.clearSessionData();
  	this.Router.navigate(['/login']);
  }

}
