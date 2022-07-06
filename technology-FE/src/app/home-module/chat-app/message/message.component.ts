import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from "../../../model/ChatMessage";
import {User} from "../../../model/User";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  /* Get message from parent component */
  @Input() chatMessage: ChatMessage;

  /* Define info u want to show */
  userMail: string;
  userName: string;
  file: any;
  messageContent: string;
  isUser: boolean;
  timeStamp?: Date = new Date();

  userCurrently: User;

  constructor() { }

  ngOnInit(): void {
    /* Get user currently */
    this.userCurrently = JSON.parse(window.localStorage.getItem('user'));

    this.userMail = this.chatMessage.email;
    this.userName = this.userName;
    this.messageContent = this.chatMessage.message;
    this.timeStamp = this.chatMessage.timeSent;

    if(this.userCurrently.email === this.userCurrently.email) {
      this.isUser = true;
    }
  }

}
