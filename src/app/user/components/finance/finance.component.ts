import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

/** ---------- STATES VARIABLES --------------------------*/
finance_status: number = 0;
/** -----------------------------------------------------*/

  constructor() { }

  ngOnInit() {
  }

}
