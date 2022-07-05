export class ChatMessage {
  $key: string;
  email?: string;
  username?: string;
  imgUrl?: string;
  message?: string;
  timeSent?:Date =  new Date();
  isOwn: boolean;
}
