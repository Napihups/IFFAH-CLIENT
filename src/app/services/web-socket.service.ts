import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebSocketService {


	constructor(){
		// console.log("WebSocketService has been initialized !");
		this.connect();
	}


	/** ---------------------------------------------------------*/
	private socket;
	private $financeState: Observable<any> = new Observable(obs => {
			this.socket.on('give:finance_states', (result) => {
				obs.next(result);
			});
			return () => {this.socket.disconnect();}
		});
	/** ---------------------------------------------------------*/


	connect() {
		this.socket = io('ws://localhost:3310/');
	}


	/** -----------------------------------------------------------------*/
	//		Asking 
	/** -----------------------------------------------------------------*/
	askFinanceState(uid) {
		this.socket.emit('ask:finance_states', uid);
	}


	/** -----------------------------------------------------------------*/
	//		Observables
	/** -----------------------------------------------------------------*/
	finance_states() {
		let observable = new Observable(obs => {
			this.socket.on('give:finance_states', (result) => {
				obs.next(result);
			});
			return () => {this.socket.disconnect();}
		})
		return observable;
	}


	/** -----------------------------------------------------------------*/
	//		SETTERS AND GETTERS
	/** -----------------------------------------------------------------*/
	getFinanceStateObservable(): Observable<any> {
		return this.$financeState;
	}
	
}