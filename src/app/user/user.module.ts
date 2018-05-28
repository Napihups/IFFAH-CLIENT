import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { MdDialogModule } from '@angular/material';

import { ProfileComponent } from './components/profile/profile.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserMainComponent } from './components/user-main/user-main.component';
import { UserModuleRouting } from './user-module.routing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NoticeBoardComponent } from './components/notice-board/notice-board.component';
import { LeafHouseComponent } from './components/leaf-house/leaf-house.component';
import { FinanceComponent } from './components/finance/finance.component';
import { FSetupComponent } from './components/f-setup/f-setup.component';
import { FinanceGuard } from '../services/finance-guard.service';
import { WebSocketService } from '../services/web-socket.service';
import { AppContext } from '../app-context.service';
import { FinanceService } from '../services/finance-flow.service';
import { CashinventoryService } from '../services/cash-inventory.service';
import { CashInventoryComponent } from './components/cash-inventory/cash-inventory.component';
import { CiSetupComponent } from './components/ci-setup/ci-setup.component';
import { CiDashboardComponent } from './components/ci-dashboard/ci-dashboard.component';

// -------------- DOM DIRECTIVES ----------------------//
import { SrTabDirective } from '../dom-directives/srTabDom.directive';
import { DashboardTabDirective } from '../dom-directives/dashboardTabDom.directive';
import { CiLoansComponent } from './components/ci-loans/ci-loans.component';
import { CiSrComponent } from './components/ci-sr/ci-sr.component';
import { CiLiabilitiesComponent } from './components/ci-liabilities/ci-liabilities.component';
import { ModalRemoveLbComponent } from './modals/modal-remove-lb/modal-remove-lb.component';

@NgModule({
  imports: [
    CommonModule,
    UserModuleRouting,
    FormsModule,
    HttpClientModule,
    // MdDialogModule
  ],
  declarations: [
  	ProfileComponent, 
  	RepositoryComponent, 
  	UserMainComponent, 
  	NavbarComponent, 
  	NoticeBoardComponent, 
    LeafHouseComponent, FinanceComponent, FSetupComponent, 
    CashInventoryComponent, CiSetupComponent, CiDashboardComponent
    ,
    SrTabDirective,
    DashboardTabDirective,
    CiLoansComponent,
    CiSrComponent,
    CiLiabilitiesComponent,
    ModalRemoveLbComponent
  ],
  providers: [

      FinanceGuard,
      WebSocketService,
      AppContext,
      FinanceService,
      CashinventoryService
  ]
})
export class UserModule { }
