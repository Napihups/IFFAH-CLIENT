import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

	//-------------------------------------------------------------//
	private activeTab: string = 'profile';
	isActive: boolean = true;
	//-------------------------------------------------------------//
  constructor() { }

  ngOnInit() {
  }


  getTabActive(){
  	return false;
  }

  setActiveTab(val: string):void {
  	this.activeTab = val;
  }

}
