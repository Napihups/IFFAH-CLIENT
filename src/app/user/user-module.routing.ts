import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './components/user-main/user-main.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent }from './components/repository/repository.component';


const route :Routes = [

	{
		path: 'user', component: UserMainComponent,

		children: [

			{
				path:'', component: RepositoryComponent
			},
			{
				path:'profile', component: ProfileComponent
			},
			{
				path:'repository', component: RepositoryComponent
			},
			// {
			// 	path: 'liabilities', component: LiabilitiesComponent
			// }
		]
	}
]

export const UserModuleRouting: ModuleWithProviders = RouterModule.forRoot(route);