import { Component, OnInit } from '@angular/core';
declare var $:any;
import { LiabilitiesRestService } from '../../../services/liabilities-rest.service';
import { FormValidationService } from '../../../services/form-validation.service';

@Component({
  selector: 'modal-create-lb',
  templateUrl: './modal-create-lb.component.html',
  styleUrls: ['./modal-create-lb.component.css']
})
export class ModalCreateLbComponent implements OnInit {

  /* ----------------------------------------------------------------*/
  private fd_title: string;
  private fd_type: string;
  private fd_expAmount: number;

  constructor(private LBService : LiabilitiesRestService, 
  		private FormValService : FormValidationService) { }

  ngOnInit() {
  }




  /*----------------- FUNCTIONS -----------------------------*/

  public addNewLb() {
  	console.log(this.fd_title);
  	console.log(this.fd_type);
  	console.log(this.fd_expAmount);
  	this.LBService.doAddNewLiability({
  		title : this.fd_title,
  		type : this.fd_type,
  		expAmount : this.fd_expAmount
  	})

  	.subscribe(data => {
  		console.log(data);
  	})

  	
  	$('#addLbModal').modal('hide');
  }

}
