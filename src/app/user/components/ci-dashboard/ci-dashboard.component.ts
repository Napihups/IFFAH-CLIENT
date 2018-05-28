import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-dashboard',
  templateUrl: './ci-dashboard.component.html',
  styleUrls: ['./ci-dashboard.component.css']
})
export class CiDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  test(){
  	console.log("Paper Clip Clicked");
  }

}
