import { Injectable } from '@angular/core';
import { LiabilityModel } from '../models/liability.model';

@Injectable()
export class FormValidationService {

	constructor() {}



/** ---------SERVICE FUNCTIONS -------------------------------*/

/** ------------------------------------------------------------------------------*/	
	validateRegisterForm(form) : any {


		if(form.username === undefined || form.username === null){
			return {success: false, msg: 'Please enter new username !'};
		}
		else if(form.email === undefined || form.username === null){
			return {success: false, msg: 'Please enter email !'};
			
		} else if(form.password === undefined || form.password === null){
			return {success: false, msg: 'Please enter new password !'};
		} else if(form.confirmPassword === undefined || form.confirmPassword === null) {
			return {success:false, msg: 'Please enter again password to confirm !'};
		} else {
			if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)){

				if(form.password != form.confirmPassword) {
					return {success:false, msg:"Password not matched !"};
				} else {
					return {success:true, msg: form};
				}
			    
			} else {

				return {success: false, msg: "Please provide a valid email !"};
				 
			}
		}

	}


/** ------------------------------------------------------------------------------*/	
	validateLoginForm(form) : string{ 
		if(form.username == undefined) {
			return "username";
		} else if (form.password == undefined){
			return "password";
		} else {
			return "validated";
		}
	}

/** ------------------------------------------------------------------------------*/	
	validateFinanceSetupForm(form): any {
		if(form.typeSelected === undefined || form.typeSelected === null) {
			return {success: false, result: 'type'};
			// return 'type';
		} else if(form.renumAmount === undefined || form.renumAmount === null) {
			return {success: false, result: 'renumAmount'};
			// return 'renumAmount';
		} else if(form.baseCurrency === undefined || form.baseCurrency === null) {
			return {success: false, result: 'baseCurrency'};
			// return 'baseCurrency';
		}
		else {
			switch(form.typeSelected){
				case 'W' : {
					if(form.dow === undefined || form.dow === null){
						return {success: false, result: 'dow'};
						// return 'dow';
					} else {
						return {success: true, result: form};
						// return 'clear';
					}
				}
				case 'M' : {
					if(form.dom === undefined || form.dom === null){
						return {success: false, result: 'dom'};
						// return 'dom';
					} else {
						return {success: true, result: form};
						// return 'clear';
					}
				}
				case 'Y' : {
					if(form.doy_month === undefined || form.doy_month === null){
						return {success: false, result: 'doy_month'};
						// return "doy_month";
					} else if(form.doy_day === undefined || form.doy_day === null) {
						return {success: false, result: 'doy_day'};
						// return 'doy_day';
					} else {
						return {success: true, result: form};
						// return 'clear';
					}
				}
			}
		}
		
	}

/** ------------------------------------------------------------------------------*/

	validateNewLbForm(form: LiabilityModel) {
		if(form.title === undefined || form.title === null){
			return {success: false, data: 'title'}
		} 

		else if(form.type === undefined || form.type === null){
			return {success: false, data: 'type'};
		}
		else if(form.expAmount === undefined || form.expAmount <= 0) {
			return {success: false, data: 'amount'}
		} 

		else {
			return {success: true, data: form};
		}
	}

}