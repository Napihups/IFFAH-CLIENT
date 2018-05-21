import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../../services/passport.service';
import { WebSocketService } from '../../../services/web-socket.service';
import { AppContext } from '../../../app-context.service';

@Component({
  selector: 'app-cash-inventory',
  templateUrl: './cash-inventory.component.html',
  styleUrls: ['./cash-inventory.component.css']
})
export class CashInventoryComponent implements OnInit {


/** ---------- STATES VARIABLES --------------------------*/
	financeState: number;
/** -----------------------------------------------------*/


  constructor(private PassportService : PassportService,
  			private Context : AppContext,
  			private Socket : WebSocketService) { }

  ngOnInit() {
  	this.Context.getFState().subscribe(data => {
  		this.financeState = data;
  	})
  }

}
