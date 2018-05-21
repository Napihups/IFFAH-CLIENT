import { Injectable, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { PassportService } from './services/passport.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppContext implements OnInit {


	/** ------------------- COMPONENTS DATA ----------------------------*/
	// COMMONS ------------------------------------------//
	private server_domain: string = 'http://localhost:3310';


	// private financeState:number = undefined;
	private ciState = new BehaviorSubject<any>(null);
	private $castCiState = this.ciState.asObservable();


	constructor(private Socket: WebSocketService,
			private Passport : PassportService){
		this.subscribeAll();
		this.reInitializeContext();
		console.log('Context Is initialized !')
	}


	ngOnInit() {

	}



	private reInitializeContext(): void {
		this.Socket.askFinanceState(this.Passport.getUserSession().uid);
	}

	private subscribeAll() : void {
		this.Socket.getFinanceStateObservable()
	  	.subscribe((data: {success:boolean, payload:any}) => {
	  		if(data.success) {
	  			// this.financeState = fstate.payload;
	  			console.log(data.payload);
	  			this.ciState.next(data.payload);
	  		} else {
	  			this.ciState.next(null);
	  			// this.financeState = null;
	  		}
	  	})
	}


	/** --------------------GETTERS AND SETTERS--------------------------*/
	// public getFinanceState(){
	// 	return this.financeState;
	// }

	public getFState(){
		return this.$castCiState;
	}


	public getServerDomain(): string {
		return this.server_domain;
	}




}