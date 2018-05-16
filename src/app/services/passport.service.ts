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
	){
		console.log("Passport service is Initialized");
	}



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
    	this.account = JSON.parse(localStorage.getItem('accSession'));
	}

	isAuthenticated(): boolean {

	    let t = localStorage.getItem('t_id');
	    let u = localStorage.getItem('accSession');
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



	clearSessionData(){
		this.token = null;
		this.account = null;
		localStorage.clear();
	}


	getUserSession() {
	    if(this.isAuthenticated()){
	      return JSON.parse(localStorage.getItem('accSession'));
	    } else {
	      return null;
	    }
	}

	getFinanceModState() : number {
		if(this.isAuthenticated()){
			let fstates = JSON.parse(localStorage.getItem('accSession')).module_states.finance;
			return fstates;
		} else {
			return null;
		}
	}

	changeFinanceState(number) : void {
		if(this.isAuthenticated()) {
			let session = JSON.parse(localStorage.getItem('accSession'));
			session.module_states.finance = number;
			localStorage.setItem('accSession', JSON.stringify(session));
		}
	}

}