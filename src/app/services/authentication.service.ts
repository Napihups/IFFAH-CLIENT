import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

	constructor(private http: Http) {

	}



	// -------- NON AUTH REQUEST -----------------//
	authenticateUserLogin(form) {
		let headers = new Headers();
		headers.append('Content-type', 'application/json');
		return this.http.post('http://localhost:3310/account/login', form,
			{headers: headers})
		.map(res => res.json());
	}

}