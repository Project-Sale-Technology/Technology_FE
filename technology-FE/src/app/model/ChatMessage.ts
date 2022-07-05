export class ChatMessage {
  $key: string;
  email?: string;
  fullName?: string;
  imgUrl?: string;
  message?: string;
  timeSent?:Date =  new Date();
  isOwn: boolean;
}
