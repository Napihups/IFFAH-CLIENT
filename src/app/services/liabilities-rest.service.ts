import { Injectable } from '@angular/core';
import { AppContext } from '../app-context.service';
import { PassportService } from './passport.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { LiabilityModel } from '../models/liability.model';

@Injectable()
export class LiabilitiesRestService {


	constructor(
		private Http : HttpClient,
		private Passport: PassportService,
		private Context : AppContext
		){
	}



	public doAddNewLiability(form: LiabilityModel) {
		console.log(form);

		let headers = new HttpHeaders().set('Authorization', this.Passport.getAuthToken());

		return this.Http.post(this.Context.getServerDomain() + 
			'liability/new',
			form, {headers});
	}

}