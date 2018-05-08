import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leaf-house',
  templateUrl: './leaf-house.component.html',
  styleUrls: ['./leaf-house.component.css']
})
export class LeafHouseComponent implements OnInit, AfterViewInit {


	//------- DOM ---------------------------//
	@ViewChild('paycheckForm') paycheckForm
	@ViewChild('amountInput') amountInput;
	@ViewChild('pcForm') pcForm;

	//---------------------------------------//

	//------------ DOM STATE -----------------
	paycheckFormDisplay:boolean = false;
	showMsgONE:boolean = false
	//---------------------------------------//

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	if(!this.paycheckFormDisplay){
  		this.paycheckForm.nativeElement.className = 'paycheck-form' ;
  	}
  	this.pcForm.nativeElement.reset();
  }



  //------------ DOM FUNCTIONS ------------------------------//
  paycheckFormClick(){
  	this.paycheckFormDisplay = !this.paycheckFormDisplay;
  	if(!this.paycheckFormDisplay){
  		this.paycheckForm.nativeElement.className = 'paycheck-form' ;
  	} else {
  		this.paycheckForm.nativeElement.className = 'paycheck-form paycheck-form-display' ;
  	}
  }

  doCancelPayCheckForm(){
  	this.paycheckFormDisplay = false;
  	this.paycheckForm.nativeElement.className = 'paycheck-form';
  	this.pcForm.nativeElement.reset();
  }

  doDeposit(){
  	this.paycheckFormDisplay = false;
  	this.paycheckForm.nativeElement.className = 'paycheck-form';
  	this.pcForm.nativeElement.reset();
  	this.showMsgONE = true;
  }


  //----------------- UTILS -----------------------------------//




}
