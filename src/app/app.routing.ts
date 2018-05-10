import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './services/auth-guard.service';

const route: Routes = [

	{path: '', redirectTo: 'login', pathMatch: 'full'},
	{path: 'login', component: LoginComponent, canActivate : [AuthGuard]},
	{path: 'register', component: RegisterComponent, canActivate : [AuthGuard]},
	{path: '**', redirectTo: 'login', pathMatch: 'full'}
]

export const appRoute: ModuleWithProviders = RouterModule.forRoot(route);
