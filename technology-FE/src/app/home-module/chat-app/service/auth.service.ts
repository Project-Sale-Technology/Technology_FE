import { Injectable } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/storage";
import {AngularFireDatabase, AngularFireList} from "@angular/fire/database";

const BASE_PATH = "users/";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /* To show list users */
  users: AngularFireList<any>;

  constructor(private db: AngularFireDatabase , private storage: AngularFireStorage) { }

  /* Logout */
  logout() {
    this.setStatusForUser(false , JSON.parse(window.localStorage.getItem('user')).id);
  }

  /* Set status for user */
  setStatusForUser(status: boolean , userId: any) {
    const path = `${BASE_PATH}/${userId}`;

    const data = {
      status: status
    }

    this.db.object(path).update(data).then(()=>window.location.reload())
      .catch(error => console.log(error));
  }

  /* Set user to firebase */
  setUserData(uId: any , fullName: string , email: string , status: boolean) {
    /*Create path */
    const path = `${BASE_PATH}/${uId}`;

    const data = {
      email: email,
      fullName: fullName ,
      status: status
    }

    /* Save user */
    this.db.object(path).update(data).catch(error=> console.log(error));
  }
}
