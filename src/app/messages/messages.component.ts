import { Component } from '@angular/core';
import { MessageService } from '../services/message-service/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent {

  // Injeção de dependência
  constructor(public messageService: MessageService){}


}
