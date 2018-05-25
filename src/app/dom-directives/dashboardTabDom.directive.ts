import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: "[dashboard-tab]"
})

export class DashboardTabDirective {

	constructor(el: ElementRef){
		el.nativeElement.classList.add('active');
	}
}