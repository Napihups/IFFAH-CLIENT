import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[loansTab]'
})

export class LoansTabDirective {

	constructor(el: ElementRef){
		console.log("This is DOM for Loans tab : ", el);
	}


	public testDirective(){
		console.log('Test Directive for SR tab');
	}
}