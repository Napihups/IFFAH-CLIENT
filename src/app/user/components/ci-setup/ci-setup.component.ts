import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormValidationService } from '../../../services/form-validation.service';
import { PassportService } from '../../../services/passport.service';
import { FinanceService } from '../../../services/finance-flow.service';
import { CashinventoryService} from '../../../services/cash-inventory.service';

@Component({
  selector: 'app-ci-setup',
  templateUrl: './ci-setup.component.html',
  styleUrls: ['./ci-setup.component.css']
})
export class CiSetupComponent implements OnInit, AfterViewInit {

	/** ------------------STATES VARIABLES -------------------------*/
typeSelected: string = 'W';
renumAmount: string;
baseCurrency: string;
dow: string;
dom: string;
doy_month: string;
doy_day: string;
formError: string = '';


/** ---------------- FORM DEFAULT VALUES ----------------------------*/
currenciesOptions : Array<string> = ['USD','SGD','EUR','RMS'];

dayOfWeekOptions : Array<string> = ['Sunday', 'Monday','Tuesday','Wednesday',
'Thursday','Friday','Saturday'];


dayOfMonthOptions : Array<string> = ['01', '02','03','04','05','06',
'07', '08','09','10','11','12','13','14','15','16','17','18','19','20', '21'
,'22','23','24','25','26','27','28']


@ViewChild('sBtnW') btnWeek;
@ViewChild('sBtnM') btnMonth;
@ViewChild('sBtnY') btnYear;

/** form input elements */
@ViewChild('formsetup') formsetup;
@ViewChild('renumInput') renumInput;
@ViewChild('baseCInput') baseCInput;
@ViewChild('dowInput') dowInput;
@ViewChild('domInput') domInput;
@ViewChild('doyMonthInput') doyMonthInput;
@ViewChild('doyDayInput') doyDayInput;

/**--------------------------------------------------------------*/
  constructor(
  			private FormVService : FormValidationService,
        private PassportService : PassportService,
        private FinanceService : FinanceService,
        private CashinventoryService : CashinventoryService
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
    this.clearSetupFormInput();
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
  	if(vResult.success === true){
      console.log("Clear to submit form !!!")
      console.log(vResult.result);
      // this.FinanceService.startFinance(vResult.result); on beta
      this.CashinventoryService.startCashInventory(vResult.result).subscribe(
        data => {
          console.log(data);
        },
        err => {
          let errJson = JSON.parse(JSON.stringify(err));
          if(errJson.status === 401){
            if(errJson.statusText === 'Unauthorized'){
              console.log('Sorry you are not authorized to access this page ');
            }
          }
        }
      );
      // this.FinanceService.startFinance(vResult.result).subscribe(
      //   data => {
      //   console.log(data);
      //   },
      //   err => {
      //     let errJson = JSON.parse(JSON.stringify(err));
      //     if(errJson.status === 401){
      //       if(errJson.statusText === 'Unauthorized'){
      //         console.log('Sorry you are not authorized to access this page ');
      //       }
      //     }
      //   });
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
  	switch(error.result){
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

  /*-------------------------------------------------------------------------------------*/
  clearSetupFormInput(): void {
    this.formsetup.nativeElement.reset();
    // only base currency input is not reset properly...
    this.baseCInput.nativeElement.value = '';
  }

}
