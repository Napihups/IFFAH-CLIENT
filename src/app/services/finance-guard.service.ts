import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';
import { PassportService } from './passport.service';
import { AppContext} from '../app-context.service';

@Injectable()
export class FinanceGuard implements CanActivate {


	constructor(private PassportService : PassportService,
				private Context : AppContext,
				private Router : Router) {}

	 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

	 	if(state.url === '/user/finance/setup'){
	 			if(this.Context.getFState().subscribe(data => {
			 		if(data === 0){
			 			return true;
			 		} else if(data === 1){
			 			this.Router.navigate(['/user/finance']);
			 		}
			 	}))
			 	// if(this.PassportService.getFinanceModState() === 0){
			 	// 	return true;
			 	// } else {
			 	// 	this.Router.navigate(['/user/finance']);
			 	// }
			 	return true;
	 	}

	 }

}