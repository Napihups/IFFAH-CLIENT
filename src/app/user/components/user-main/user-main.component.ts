import { Component, OnInit} from '@angular/core';
import { WebSocketService } from '../../../services/web-socket.service';
import { AppContext } from '../../../app-context.service';

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css']
})
export class UserMainComponent implements OnInit {




  constructor(private Context : AppContext) { 
  }

  ngOnInit() {

  
  }

}
