import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';
import { PassportService } from './passport.service';

@Injectable()
export class FinanceGuard implements CanActivate {


	constructor(private PassportService : PassportService,
				private Router : Router) {}

	 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

	 	if(this.PassportService.getFinanceModState() === 0){
	 		return true;
	 	} else {
	 		this.Router.navigate(['/user/finance']);
	 	}
	 	return true;
	 }

}