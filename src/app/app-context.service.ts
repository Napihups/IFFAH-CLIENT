import { Injectable, OnInit } from '@angular/core';
import { WebSocketService } from './services/web-socket.service';
import { PassportService } from './services/passport.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AppContext implements OnInit {


	/** ------------------- COMPONENTS DATA ----------------------------*/
	// private financeState:number = undefined;
	private fState = new BehaviorSubject<any>(null);
	private $castfState = this.fState.asObservable();


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
	  	.subscribe((fstate: {success:boolean, payload:any}) => {
	  		if(fstate.success) {
	  			// this.financeState = fstate.payload;
	  			this.fState.next(fstate.payload);
	  		} else {
	  			this.fState.next(null);
	  			// this.financeState = null;
	  		}
	  	})
	}


	/** --------------------GETTERS AND SETTERS--------------------------*/
	// public getFinanceState(){
	// 	return this.financeState;
	// }

	public getFState(){
		return this.$castfState;
	}




}