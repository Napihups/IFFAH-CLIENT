import { Component, OnInit } from '@angular/core';
import { PassportService } from '../../../services/passport.service';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

/** ---------- STATES VARIABLES --------------------------*/
finance_status: number;
/** -----------------------------------------------------*/

  constructor(private PassportService : PassportService) { }

  ngOnInit() {
  		this.finance_status = this.PassportService.getFinanceModState();
  }

}
