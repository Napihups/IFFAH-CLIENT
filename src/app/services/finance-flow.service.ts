import { Injectable } from '@angular/core';
import { AppContext } from '../app-context.service';
import { PassportService } from './passport.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FinanceSetupModel } from '../models/finance-setup.model';


@Injectable()
export class FinanceService {


	constructor(private http: HttpClient,
				private Passport : PassportService,
				private Context : AppContext){
	}



	/** REST API ENDPOINT -------------------*/
	public startFinance(financeSetup) {
		
		let financeForm = {
			uid: this.Passport.getUserSession().uid,
			properties : {
				acc_type : financeSetup.typeSelected,
				renumeration_amount : financeSetup.renumAmount,
				base_currency : financeSetup.baseCurrency,
				setup_command : this.createSetupCommand(financeSetup)
			},
			detail : {

			}
		}
		let headers = new HttpHeaders().set('Authorization', this.Passport.getAuthToken());
		//XXX //
		return this.http.post('http://localhost:3310/finance/start', financeForm, {headers});
	}



	/** ------------------ UTILS FUNCTION ----------------------------*/
	public createSetupCommand(financeSetup): string {

		if(financeSetup.typeSelected === 'W'){
			return "DOW:" + financeSetup.dow;
		} 
		else if(financeSetup.typeSelected === 'M'){
			return "DOM:" + financeSetup.dom;
		} 
		else if(financeSetup.typeSelected === 'Y'){
			return "DOY:" + financeSetup.doy_day + "/" + financeSetup.doy_month;
		}
	}



}