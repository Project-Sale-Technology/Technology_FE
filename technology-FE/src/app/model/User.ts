import {Province} from "./Province";
import {Order} from "./Order";
import {Feedback} from "./Feedback";
import {Role} from "./Role";

export class User {
  id: number;
name: string;
email: string;
address: string;
createAt: string;
updateAt: string;
password: string;
province: Province;
order: Order;
feedback: Feedback;
role: Role;
token?: string;
}
