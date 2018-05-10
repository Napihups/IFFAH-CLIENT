import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';
import { PassportService } from './passport.service';


@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private PassportService: PassportService
	){}

	 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

	 	var requestUrl = state.url;
	 	console.log(this.PassportService.isAuthenticated());
	 	if(requestUrl === '/login' || requestUrl === '/register'){
	 		if(this.PassportService.isAuthenticated()) {
	 			this.router.navigate(['/user']);
	 			/** this is to ensure when user is logged in, they cant get over to the login page or register page
	 			during session, enforce them to sign out first */
	 			return false;
	 		} else {
	 			return true;
	 		}
	 	}
	 	/** if already logged in ..ensure user is authenticated to access other
	 	data */
	 	if(!this.PassportService.isAuthenticated()){
	 		this.router.navigate(['/login'])
	 		return false;
	 	} else {
	 		return true;
	 	}
	 }

}