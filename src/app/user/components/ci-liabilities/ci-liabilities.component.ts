import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-liabilities',
  templateUrl: './ci-liabilities.component.html',
  styleUrls: ['./ci-liabilities.component.css']
})
export class CiLiabilitiesComponent implements OnInit {


/** ---------------------------------------------------*/
private rmvLbModalData : string;
private lbList: any = [
	{
		lbTitle : 'HDB Loans',
		liableAmt : '$199',
		lbType : 'Standard Loan',
		lbStatus : 'Normal',
		lbRemark : ''
	},
	{
		lbTitle : 'Mobile - Singtel',
		liableAmt : '$80',
		lbType : 'Bill',
		lbStatus : 'Normal',
		lbRemark : 're-updated'
	},
	{
		lbTitle : 'SPA Group',
		liableAmt : '$185',
		lbType : 'Bill',
		lbStatus : 'Normal',
		lbRemark : ''
	}
]
/** ---------------------------------------------------*/

  constructor() { }

  ngOnInit() {
  }

  openRmvDialog(string){
  	
  	this.rmvLbModalData = string;
  }

}
