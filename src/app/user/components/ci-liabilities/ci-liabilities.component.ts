import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiabilityModel } from '../../../models/liability.model';

@Component({
  selector: 'app-ci-liabilities',
  templateUrl: './ci-liabilities.component.html',
  styleUrls: ['./ci-liabilities.component.css']
})
export class CiLiabilitiesComponent implements OnInit, AfterViewInit {


/** ---------------------------------------------------*/
private rmvLbModalData : string;
private lbList: LiabilityModel[] = [
	{
		title : 'HDB Loans',
		type : 'Standard Loan',
		liableAmt : 199,
		status : 'Disbursed',
		remark : ''
	},
	{
		title : 'Mobile - Singtel',
		type : 'Bill',
		liableAmt : 80,
		status : 'Disbursed',
		remark : 're-updated'
	},
	{
		title : 'SPA Group',
		type : 'Bill',
		liableAmt : 185,
		status : 'Disbursed',
		remark : ''
	}
]
	public closeResult: string;
/** ---------------------------------------------------*/

  constructor( ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	 
  }

  openRmvDialog(string){
  	this.rmvLbModalData = string;
  }

 

  

}
