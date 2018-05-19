import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../../services/passport.service';
import { WebSocketService } from '../../../services/web-socket.service';
import { AppContext } from '../../../app-context.service';
@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

/** ---------- STATES VARIABLES --------------------------*/
financeState: number;
/** -----------------------------------------------------*/

  constructor(private PassportService : PassportService,
  			private Context : AppContext,
  			private Socket : WebSocketService) { 
  }

  ngOnInit() {
  	this.Context.getFState().subscribe(data => {
  		this.financeState = data;
  	})
  }


 

}
