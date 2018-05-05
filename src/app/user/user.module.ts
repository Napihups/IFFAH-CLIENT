import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserModuleRouting } from './user-module.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';

@NgModule({
  imports: [
    CommonModule,
    UserModuleRouting
  ],
  declarations: [
  	ProfileComponent, 
  	RepositoryComponent, 
  	UserMainComponent, 
  	NavbarComponent, 
  	NoticeBoardComponent, LeafHouseComponent
  ]
})
export class UserModule { }
