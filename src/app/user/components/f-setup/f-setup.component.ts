import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormValidationService } from '../../../services/form-validation.service';

@Component({
  selector: 'app-f-setup',
  templateUrl: './f-setup.component.html',
  styleUrls: ['./f-setup.component.css']
})
export class FSetupComponent implements OnInit, AfterViewInit {


/** ------------------STATES VARIABLES -------------------------*/
typeSelected: string = 'W';
renumAmount: string;
baseCurrency: string;
dow: string;
dom: string;
doy_month: string;
doy_day: string;
formError: string = '';


@ViewChild('sBtnW') btnWeek;
@ViewChild('sBtnM') btnMonth;
@ViewChild('sBtnY') btnYear;

/** form input elements */
@ViewChild('renumInput') renumInput;
@ViewChild('baseCInput') baseCInput;
@ViewChild('dowInput') dowInput;
@ViewChild('domInput') domInput;
@ViewChild('doyMonthInput') doyMonthInput;
@ViewChild('doyDayInput') doyDayInput;

/**--------------------------------------------------------------*/
  constructor(
  			private FormVService : FormValidationService
  	) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.toggleSelectButton();
  }




  /** ---------------------------FUNCTIONS ---------------------------------------*/
  /**-----------------------------------------------------------------------------*/
  selectBtnClick(code){
  	this.clearFormError();
  	this.typeSelected = code;
  	this.toggleSelectButton();
  }

  /*-------------------------------------------------------------------------------------*/
  doSubmitFinanceSetup(){

  	this.clearFormError();

  	let formValues = {
  		typeSelected: this.typeSelected,
  		renumAmount: this.renumAmount,
  		baseCurrency: this.baseCurrency,
  		dow: this.dow,
  		dom: this.dom,
  		doy_month: this.doy_month,
  		doy_day : this.doy_day
  	}

  	let vResult = this.FormVService.validateFinanceSetupForm(formValues);
  	if(vResult === 'clear'){

  	} else {
  		this.displayFormError(vResult);
  	}

  }
 /*-------------------------------------------------------------------------------------*/
  toggleSelectButton(){
  	switch(this.typeSelected) {
  		case 'W': {
  			this.btnWeek.nativeElement.classList.add('btn-selected');
  			this.btnMonth.nativeElement.classList.remove('btn-selected');
  			this.btnYear.nativeElement.classList.remove('btn-selected');
  			break;
  		} 
  		case 'M': {
  			this.btnWeek.nativeElement.classList.remove('btn-selected');
  			this.btnMonth.nativeElement.classList.add('btn-selected');
  			this.btnYear.nativeElement.classList.remove('btn-selected');
  			break;
  		} 
  		case 'Y': {
  			this.btnWeek.nativeElement.classList.remove('btn-selected');
  			this.btnMonth.nativeElement.classList.remove('btn-selected');
  			this.btnYear.nativeElement.classList.add('btn-selected');
  			break;
  		} 

  	}
  	// this.clearFormError();
  }

 /*-------------------------------------------------------------------------------------*/
  displayFormError(error): void {
  	switch(error){
  		case 'renumAmount': {
  			this.renumInput.nativeElement.classList.add('error-input');
  			this.formError = 'Please enter your Renum Amount ! ';
  			break;
  		}
  		case 'baseCurrency' : {
  			this.baseCInput.nativeElement.classList.add('error-input');
  			this.formError = "Please select your base currency !";
  			break;
  		}
  		case 'dow' : {
  			this.dowInput.nativeElement.classList.add('error-input');
  			this.formError = "Please select your day of the week !";
  			break;
  		}
  		case 'dom' : {
  			this.domInput.nativeElement.classList.add('error-input');
  			this.formError = "Please select your day of the month !";
  			break;
  		}
  		case 'doy_month' : {
  			this.doyMonthInput.nativeElement.classList.add('error-input');
  			this.formError = "Please select your month of the year !";
  			break;
  		}
  		case 'doy_day' : {
  			this.doyDayInput.nativeElement.classList.add('error-input');
  			this.formError = "Please select your day of the chosen month !";
  			break;
  		}
  	}
  }


 /*-------------------------------------------------------------------------------------*/
	clearFormError():void {
		
		if(this.formError != ''){
			this.formError = '';
			this.renumInput.nativeElement.classList.remove('error-input');
			this.baseCInput.nativeElement.classList.remove('error-input');
			switch(this.typeSelected){
				case 'W': {
					this.dowInput.nativeElement.classList.remove('error-input');
					break;
				}
				case 'M': {
					this.domInput.nativeElement.classList.remove('error-input');
					break;
				}
				case 'Y': {
					this.doyMonthInput.nativeElement.classList.remove('error-input');
					this.doyDayInput.nativeElement.classList.remove('error-input');
					break;
				}
			}
		}
		
		
	}


  

}
