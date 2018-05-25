import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { PassportService } from '../../../services/passport.service';
import { WebSocketService } from '../../../services/web-socket.service';
import { AppContext } from '../../../app-context.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-cash-inventory',
  templateUrl: './cash-inventory.component.html',
  styleUrls: ['./cash-inventory.component.css']
})
export class CashInventoryComponent implements OnInit, AfterViewInit {

  @ViewChild("srTab") set contentsr(content: ElementRef){
    this.srTab = content;
  };
  @ViewChild("loansTab") set contentloans(content: ElementRef){
    this.loansTab = content;
  } ;
  @ViewChild("dashboardTab") set contentdashboard(content: ElementRef){
    this.dashboardTab = content;
  };

/** ---------- STATES VARIABLES --------------------------*/
  cashInventoryState :number;
  private srTab : ElementRef;
  private loansTab : ElementRef;
  private dashboardTab : ElementRef;


  tabSwitch: string = '';


/** -----------SUBSCRIPTIONS VARIABLES -------------------------*/
  private $ciStateSubs;
/** ----------------------------------------------------*/


  constructor(private PassportService : PassportService,
  			private Context : AppContext,
  			private Socket : WebSocketService) { }

  ngOnInit() {
    console.log("Cash inventory init ")
    this.Socket.askFinanceState(this.PassportService.getUserSession().uid);

    this.$ciStateSubs = this.Socket.getFinanceStateObservable()
        .subscribe((data: {success:boolean, payload:any}) => {
          if(data.success){
            this.cashInventoryState = data.payload;
            // this.doToggleTab('dashboard');
          }
    })

   
  }

  ngAfterViewInit(){
    
  }






  //---------------- FUNCTIONS --------------------------------//


  public doToggleTab(string): void {
    this.tabSwitch = string;
    this.setTabActive();
  }


  public setTabActive(): void {

      switch (this.tabSwitch) {
        case "dashboard":
          {
            this.dashboardTab.nativeElement.classList.add('active');
            this.loansTab.nativeElement.classList.remove('active');
            this.srTab.nativeElement.classList.remove('active');
          }
          break;
        case "loans":
          {
            this.loansTab.nativeElement.classList.add('active');
            this.dashboardTab.nativeElement.classList.remove('active');
            this.srTab.nativeElement.classList.remove('active');
          }
          break;
        case "sr":
          {
            this.srTab.nativeElement.classList.add('active');
            this.loansTab.nativeElement.classList.remove('active');
            this.dashboardTab.nativeElement.classList.remove('active');
          }
          break;
        
        default:
          // code...
          break;
      }
  }



}
