import { Injectable } from '@angular/core';
import { AppContext } from '../app-context.service';
import { PassportService } from './passport.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FinanceSetupModel } from '../models/finance-setup.model';


@Injectable()
export class CashinventoryService {


	constructor(private http: HttpClient,
				private Passport : PassportService,
				private Context : AppContext){
	}



	/** REST API ENDPOINT -------------------*/
	public startCashInventory(cashInventorySetup) {
		
		let financeForm = {
			uid: this.Passport.getUserSession().uid,
			properties : {
				acc_type : cashInventorySetup.typeSelected,
				renumeration_amount : cashInventorySetup.renumAmount,
				base_currency : cashInventorySetup.baseCurrency,
				setup_command : this.createSetupCommand(cashInventorySetup)
			},
			detail : {

			}
		}
		let headers = new HttpHeaders().set('Authorization', this.Passport.getAuthToken());

		return this.http.post(this.Context.getServerDomain() + 
			'/cashInventory/start', 
			financeForm, {headers});
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