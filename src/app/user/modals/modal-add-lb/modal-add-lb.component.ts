// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormValidationService } from '../../../services/form-validation.service';
// declare var $:any;
// @Component({
//   selector: 'modal-add-lb',
//   templateUrl: './modal-add-lb.component.html',
//   styleUrls: ['./modal-add-lb.component.css']
// })
// export class ModalAddLbComponent implements OnInit {


// /** --------------------------------------------------*/
// private title : string;
// private type : string;
// private liableAmt : number;

// private s : string = 'static';

// private formErrorMsg : any;
// private hasError : boolean = false;

// @ViewChild("titleInput") titleComp;
// @ViewChild("liableAmtInput") liableAmtComp;
// @ViewChild("modalAddComp") modalAddComp;
// @ViewChild("typeComp") typeComp;

// /** --------------------------------------------------*/

//   constructor(private FormValService : FormValidationService) { }

//   ngOnInit() {
//     this.runJQuery();
//   	console.log(this.modalAddComp.nativeElement.backdrop);
//   }



//   addNewLiability(){
//     console.log(this.type);
//   	var r = this.FormValService.validateNewLbForm({
//   		title: this.title,
//   		type : this.type,
//   		liableAmt : this.liableAmt,
//   		status : null,
//   		remark : null
//   	})
//   	if(r.success){
//       this.JQuery_closeModal();
//   		console.log('Submit Form to Backend', r.data);
//       this.clearFormError();
//       this.JQuery_clearModalForm();
//   	} else {
//   		this.displayFormError(r.data); 
//   	}
//   }



//   displayFormError(msg){

//   	this.clearFormError();

//   	this.hasError = true;
//   	switch (msg) {
//   		case "title":{
//   			this.formErrorMsg = "Please specify your title ";
//   			this.titleComp.nativeElement.classList.add('input-error');
//   			break;
//   		}
  		
//   		case "amount": {
//   			this.formErrorMsg = "Your liable amount for this LB is too low ";
//   			this.liableAmtComp.nativeElement.classList.add('input-error');
//   			break;
//   		}

//       case "type": {
//         this.formErrorMsg = "Please select your type of LB  ";
//         this.typeComp.nativeElement.classList.add('input-error');
//         break;
//       }
  		
//   		default:
//   			// code...
//   			break;
//   	}
  	
//   }


//   clearFormError() {
//   	this.hasError = false;
//   	this.formErrorMsg = null;
//   	this.titleComp.nativeElement.classList.remove('input-error');
//   	this.liableAmtComp.nativeElement.classList.remove('input-error');
//   }

//   closeModal(){
//     this.clearFormError();
//   }


// /** -------------- JQUERY SCRIPTING -----------------------------------*/
//   runJQuery(){
//     $(document).ready(function(){


//           $('#addLbModal').on('shown.bs.modal', function(){
//             $('#titleInput').focus();
//             $(this).data('bs.modal')._config.backdrop = 'static';
//             $(this).data('bs.modal')._config.keyboard = false;
//           });

//           $('#addLbModal').on('hidden.bs.modal', function(){
//             $(this).data('bs.modal')._config.backdrop = 'static';
//             $(this).data('bs.modal')._config.keyboard = false;
//             $("#addLbForm").trigger('reset');
//           });


         
         
//     });  
//   }

//   JQuery_closeModal(){
//     $('#addLbModal').modal('hide')
//   }

//   JQuery_clearModalForm(){
//     $("#addLbForm").trigger('reset');
//   }

// }
