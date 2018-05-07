import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-leaf-house',
  templateUrl: './leaf-house.component.html',
  styleUrls: ['./leaf-house.component.css']
})
export class LeafHouseComponent implements OnInit, AfterViewInit {


	//------- DOM ---------------------------//
	@ViewChild('paycheckForm') paycheckForm
	//---------------------------------------//

	//------------ DOM STATE -----------------
	paycheckFormDisplay:boolean = false;
	//---------------------------------------//

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
  	if(!this.paycheckFormDisplay){
  		this.paycheckForm.nativeElement.className = 'paycheck-form' ;
  	}
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



}
