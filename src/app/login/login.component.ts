import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { FormValidationService } from '../services/form-validation.service';
import { PassportService } from '../services/passport.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
          private AuthService: AuthenticationService,
          private FormService: FormValidationService,
          private PassportService : PassportService,
          private Router : Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.usernameInput.nativeElement.focus();
  }


  //-----------------------------------------------//
  @ViewChild("usernameInput") usernameInput;
  isChecked: boolean = false;
  username: string;
  password: string;
  //-----------------------------------------------//


//-------------- FUNCTIONS ----------------------------//
  toggleCheckBox(){
  	this.isChecked = !this.isChecked;
  }

  doUserLogin(){
    let form = {
      username: this.username,
      password: this.password
    }

    let val = this.FormService.validateLoginForm(form);
    if(val === "username") {
      /** if user not entering username */
      console.log("Please enter your username");
    } else if( val === "password"){
      /** if user not entering password */
      console.log("Please enter your password");
    } 

    else if(val === "validated"){
        /** proceed to authentication process */
        this.AuthService.authenticateUserLogin(form).subscribe(data => {
          if(data.success){
            this.PassportService.storeTokenSession(data.token, data.acc);
            this.Router.navigate(['/user']);
            console.log(data.acc);
          } else {
            console.log(data.msg);
          }
        });
    
    }



  }

}
