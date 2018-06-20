import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { LiabilityModel } from '../../../models/liability.model';

@Component({
  selector: 'app-nt-liabilities',
  templateUrl: './nt-liabilities.component.html',
  styleUrls: ['./nt-liabilities.component.css']
})
export class NtLiabilitiesComponent implements OnInit {


/* ----------------------------------------------------------------------------------*/
  private lbList : LiabilityModel[] = [] ;

/* ----------------------------------------------------------------------------------*/
  constructor() { }

  ngOnInit() {

    let x = {
      title : 'HDB Loan',
      type : 'Standard Loan',
      expAmount : 150.00
    }

    let y = {
      title : 'Mobile - singtel',
      type : 'Bill',
      expAmount : 80.00
    }

    this.lbList.push(x);
    this.lbList.push(y);

  }



  /* ----------- FUNCTIONS -----------------------------------*/
  public addNewLb() {
  	console.log("Test A")
  }

}
