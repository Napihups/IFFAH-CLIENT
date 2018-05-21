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

	private $ciState: Observable<any> = new Observable(obs => {
			this.socket.on('give:ci_state', (result) => {
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
		this.socket.emit('ask:ci_state', uid);
	}



	/** -----------------------------------------------------------------*/
	//		SETTERS AND GETTERS
	/** -----------------------------------------------------------------*/
	getFinanceStateObservable(): Observable<any> {
		return this.$ciState;
	}
	
}