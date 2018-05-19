import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

	constructor() {}



/** ---------SERVICE FUNCTIONS -------------------------------*/
	validateLoginForm(form) : string{ 
		if(form.username == undefined) {
			return "username";
		} else if (form.password == undefined){
			return "password";
		} else {
			return "validated";
		}
	}


	validateFinanceSetupForm(form): any {
		if(form.typeSelected === undefined) {
			return {success: false, result: 'type'};
			// return 'type';
		} else if(form.renumAmount === undefined) {
			return {success: false, result: 'renumAmount'};
			// return 'renumAmount';
		} else if(form.baseCurrency === undefined) {
			return {success: false, result: 'baseCurrency'};
			// return 'baseCurrency';
		}
		else {
			switch(form.typeSelected){
				case 'W' : {
					if(form.dow === undefined){
						return {success: false, result: 'dow'};
						// return 'dow';
					} else {
						return {success: true, result: form};
						// return 'clear';
					}
				}
				case 'M' : {
					if(form.dom === undefined){
						return {success: false, result: 'dom'};
						// return 'dom';
					} else {
						return {success: true, result: form};
						// return 'clear';
					}
				}
				case 'Y' : {
					if(form.doy_month === undefined){
						return {success: false, result: 'doy_month'};
						// return "doy_month";
					} else if(form.doy_day === undefined) {
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
}