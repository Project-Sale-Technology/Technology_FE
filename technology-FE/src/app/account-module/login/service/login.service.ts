import { Injectable } from '@angular/core';
import {User} from "../../../model/User";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = "http://localhost:8080/account";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  /* Handle login */
  handleLogin(user: User): Observable<User> {
    return this.httpClient.post<User>(`${API_URL}/authenticate` , user);
  }

  constructor(private httpClient: HttpClient) { }
}
