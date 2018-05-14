import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-f-setup',
  templateUrl: './f-setup.component.html',
  styleUrls: ['./f-setup.component.css']
})
export class FSetupComponent implements OnInit {


/** ------------------STATES VARIABLES -------------------------*/
typeSelected: string = 'yearly'

/**--------------------------------------------------------------*/
  constructor() { }

  ngOnInit() {
  }

}
