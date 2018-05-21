import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { FormValidationService } from '../services/form-validation.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {


	/** ------------ STATES VARIABLES ----------------------------------*/
	@ViewChild('usernameInput') usernameInput;
	@ViewChild('emailInput') emailInput;
	@ViewChild('passwordInput') passwordInput;
	@ViewChild('confirmPasswordInput') confirmPasswordInput;

	private username : string;
	private email : string;
	private password : string;
	private confirmPassword : string;

	hasError : boolean = false;
	formError: string;
	showRegisterForm : boolean = true;
	showBanner : boolean = false;
	regLoading : boolean = false;
	/** ----------------------------------------------------------------*/

  constructor(private FormValidation: FormValidationService,
  			private AuthService : AuthenticationService) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.usernameInput.nativeElement.focus();
  }



  /** ---------- FUNCTIONS -----------------------------------------------*/


  /** ------------------------------------------------------------------*/
  public doRegisterUser() {
  	this.clearFormError();
  	let registerForm = {
  		username : this.username,
  		email : this.email,
  		password : this.password,
  		confirmPassword : this.confirmPassword
  	}

  	let vResult = this.FormValidation.validateRegisterForm(registerForm);
  	console.log(vResult);
  	if(!vResult.success){
  		this.displayFormError(vResult.msg);
  	} else {
  		this.showRegisterForm = false;
  		this.regLoading = true;
  		this.AuthService.registerNewUser(vResult.msg).subscribe(
  			result => {
  				console.log(result);
  				if(result.success){
  					this.showRegisterForm = false;
  					this.showBanner = true;
  					this.regLoading = false;
  				} else  {
  					this.showRegisterForm = true;
  					this.showBanner = false;
  					this.displayFormError(result.msg);
  				}
  			},	
  			error => {
  				/** For debug purpose as of now --*/
  				console.log('Error in registering new user : ' + error);
  			}
  		);
  	}

  }


/** ------------------------------------------------------------------*/
  public displayFormError(msg){
  	this.hasError = true;
  	this.formError = msg;
  }

/** ------------------------------------------------------------------*/

  public clearFormError(){
  	this.formError = '';
  	this.hasError = false;
  } 

}
