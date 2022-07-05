import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";
import {User} from "../../../model/User";
import {ChatMessage} from "../../../model/ChatMessage";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  /* To store info user */
  user: User;

  /* To store messages */
  chatMessages: AngularFireList<any>

  /* To save url image */
  imageUrl: any;

  /* Send message */
  sendMessage(msg: any) {
    const timeStamp = this.getTimeStamp();
    const email = this.user.email;
    this.chatMessages = this.getMessages();

    if(this.imageUrl) {
      /* Properties must be like properties in class Chat Message */
      this.chatMessages.push({
        message: msg,
        timeSent: timeStamp,
        userName: email,
        imgUrl: this.imageUrl,
        email: email
      });
    }
  }

  /* Get messages */
  getMessages(): AngularFireList<ChatMessage[]> {
    /* messages must be correct because it is name url to contain database */
    return this.db.list('messages', ref => ref.orderByKey().limitToLast(200));
  }

  /* Get and format time */
  getTimeStamp(): any {
    const now = new Date();
    const date = now.getFullYear() + '/' +
      (now.getMonth() + 1) + '/' + now.getUTCDate();

    const time = now.getUTCHours() + ':' +
      (now.getUTCMinutes() + 1) + ':' + now.getUTCSeconds();
    return date + ' ' + time;
  }

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {
    /* Get user by token */
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}
