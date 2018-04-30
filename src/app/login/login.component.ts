import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {


	//-----------------------------------------------//
  @ViewChild("usernameInput") usernameInput;
	isChecked: boolean = false;
	//-----------------------------------------------//
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.usernameInput.nativeElement.focus();
  }


  toggleCheckBox(){
  	this.isChecked = !this.isChecked;
  }

}
