import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AccountSession } from '../models/account-session.model';

@Injectable()
export class PassportService {

	/** STATES AND DATA ------------*/
	token: any;
	account: any;

	/**------------------------------*/

	constructor(
		private http: Http
	){}



	/**------- FUNCTIONS ------------------------*/

	createAuthHeader(): Headers {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		headers.append('Authorization', localStorage.getItem('t_id'));
		return headers;
	}


	storeTokenSession(token, accSession: AccountSession) {
		localStorage.setItem('t_id', token);
		localStorage.setItem('accSession', JSON.stringify(accSession));
	}


	loadTokenData() {
		this.token = localStorage.getItem('t_id');
    	this.account = JSON.parse(localStorage.getItem('account'));
	}

	isAuthenticated(): boolean {

	    let t = localStorage.getItem('t_id');
	    let u = localStorage.getItem('account');
	    if(t != null && u != null){
	      return true;
	    }else {
	      return false;
	    }
  	}

  	getAuthToken(){
    /* for safety reason, get it directly from localstorage*/
	    if(this.isAuthenticated()){
	      return localStorage.getItem('t_id');
	    } else {
	      return null;
	    }
	}

/** IN CONSIDERATION -------------------------*/
	// getAccountDetail() {
	//     if(this.isAuthenticated()){
	//       return JSON.parse(localStorage.getItem('user'));
	//     } else {
	//       return null;
	//     }
	// }

}