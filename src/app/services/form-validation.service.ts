import { Injectable } from '@angular/core';

@Injectable()
export class FormValidationService {

	constructor() {}


	validateLoginForm(form) : string{ 
		if(form.username == undefined) {
			return "username";
		} else if (form.password == undefined){
			return "password";
		} else {
			return "validated";
		}
	}
}