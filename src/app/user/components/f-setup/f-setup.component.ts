import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-f-setup',
  templateUrl: './f-setup.component.html',
  styleUrls: ['./f-setup.component.css']
})
export class FSetupComponent implements OnInit, AfterViewInit {


/** ------------------STATES VARIABLES -------------------------*/
typeSelected: string = 'W'
@ViewChild('sBtnW') btnWeek;
@ViewChild('sBtnM') btnMonth;
@ViewChild('sBtnY') btnYear;

/**--------------------------------------------------------------*/
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	this.toggleSelectButton();
  }




  /** ------------ FUNCTIONS ---------------------------------------*/
  selectBtnClick(code){
  	this.typeSelected = code;
  	this.toggleSelectButton();
  }

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
  }

}
