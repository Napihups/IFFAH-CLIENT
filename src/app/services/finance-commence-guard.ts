import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate,
         ActivatedRouteSnapshot,
         RouterStateSnapshot, Router } from '@angular/router';

@Injectable()
export class FinanceCommenceGuard implements CanActivate {


	constructor() {}

	 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

	 	return true;
	 }

}