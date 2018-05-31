import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'modal-remove-lb',
  templateUrl: './modal-remove-lb.component.html',
  styleUrls: ['./modal-remove-lb.component.css'],
  inputs: ['lbTitle']
})
export class ModalRemoveLbComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	// JQUERY SCRIPTS -----*/
  	$(document).ready(function(){


          $('#rmvLbModal').on('hidden.bs.modal', function(){
      
          	$(this).data('bs.modal')._config.backdrop = 'static';
          	$(this).data('bs.modal')._config.keyboard = false;
          });
         
         
    });	
  }

}
