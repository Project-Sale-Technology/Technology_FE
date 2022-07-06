import {Component, OnChanges, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatService} from "./service/chat.service";
import {Observable} from "rxjs";
import {User} from "../../model/User";

@Component({
  selector: 'app-chat-app',
  templateUrl: './chat-app.component.html',
  styleUrls: ['./chat-app.component.css']
})
export class ChatAppComponent implements OnInit , OnChanges {

  /* Show chat app */
  showChatApp: boolean = false;

  /* Show notification message */
  showNotiError = false;

  /* Form chat app */
  formChat: FormGroup;

  /* To get entry messages sent */
  messagesSent: Observable<any>;

  /* Get user currently */
  userCurrently: User;

  constructor(private fb: FormBuilder , private chatService: ChatService) {
  }

  ngOnInit(): void {
    /* User currently */
    this.userCurrently = JSON.parse(window.localStorage.getItem('user'));
    console.log(this.userCurrently);

    /* Get entry message sent */
    this.messagesSent = this.chatService.getMessages().valueChanges();

    /* Create properties for form chat */
    this.formChat = this.fb.group({
      message: ['' , Validators.required] ,
      fileUpload: ['' , Validators.required]
    })
  }

  ngOnChanges(): void {
    this.messagesSent = this.chatService.getMessages().valueChanges();
  }

  /* Send message */
  sendMessage() {
    /* Get value in form chat */
    if (this.message.invalid) {
      this.showNotiError = true;
      setTimeout(() => {
        this.showNotiError = false;
      }, 3000);
    } else {
      const message = this.message.value;
      const fileUpload = this.fileUpload.value;
      this.chatService.sendMessage(message);
      this.formChat.reset();
    }
  }

  showChat() {
    this.showChatApp = !this.showChatApp;
  }

  /* Getter properties form chat */
  get message() {
    return this.formChat.get('message');
  }

  get fileUpload() {
    return this.formChat.get('fileUpload');
  }
}
