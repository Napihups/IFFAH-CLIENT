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


	validateFinanceSetupForm(form): string {
		if(form.typeSelected === undefined) {
			return 'type';
		} else if(form.renumAmount === undefined) {
			return 'renumAmount';
		} else if(form.baseCurrency === undefined) {
			return 'baseCurrency';
		}
		else {
			switch(form.typeSelected){
				case 'W' : {
					if(form.dow === undefined){
						return 'dow';
					} else {
						return 'clear';
					}
				}
				case 'M' : {
					if(form.dom === undefined){
						return 'dom';
					} else {
						return 'clear';
					}
				}
				case 'Y' : {
					if(form.doy_month === undefined){
						return "doy_month";
					} else if(form.doy_day === undefined) {
						return 'doy_day';
					} else {
						return 'clear';
					}
				}
			}
		}
		
	}
}