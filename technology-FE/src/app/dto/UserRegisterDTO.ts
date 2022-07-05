import {Province} from "../model/Province";

export class UserRegisterDTO {
  id?: any;
  fullName: string;
  password: string;
  confirmPassword: string;
  email: string;
  phoneNumber: string;
  province: Province;
}
