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

    /* Properties must be like properties in class Chat Message */
    this.chatMessages.push({
      message: msg,
      timeSent: timeStamp,
      userName: email,
      // imgUrl: this.imageUrl,
      email: email
    });
  }

  /* Get messages */
  getMessages(): AngularFireList<ChatMessage[]> {
    /* messages must be correct because it is name url to contain database */
    return this.db.list('messages', ref => ref.orderByKey().limitToLast(200));
  }

  /* Get and format time */
  getTimeStamp(): any {
    const now = new Date();
    const date = now.getDate() + '/' +
      (now.getMonth() + 1) + '/' + now.getFullYear();

    const time = now.getHours() + ':' +
      (now.getMinutes() > 10 ? '' : '0'+ now.getMinutes());

    const timeShow = now.getHours() > 12? 'PM':'AM';
    return date + ' ' + time + ' ' + timeShow;
  }

  constructor(private storage: AngularFireStorage, private db: AngularFireDatabase) {
    /* Get user by token */
    this.user = JSON.parse(window.localStorage.getItem('user'));
  }
}
