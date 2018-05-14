import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent }from './components/repository/repository.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FSetupComponent } from './components/f-setup/f-setup.component';
import { AuthGuard } from '../services/auth-guard.service';



const route :Routes = [

	{
		path: 'user', component: UserMainComponent,
		
			canActivate: [AuthGuard],

		children: [

			{
				path:'', redirectTo: 'finance', pathMatch: 'full'
			},
			{
				path:'profile', component: ProfileComponent
			},
			{
				path:'repository', component: RepositoryComponent
			},
			// {
			// 	path: 'leaf-house', component: LeafHouseComponent
			// },
			{
				path: 'finance', component: FinanceComponent
			},
			{
				path: 'finance/setup', component : FSetupComponent
			}
		]
	}
]

export const UserModuleRouting: ModuleWithProviders = RouterModule.forRoot(route);