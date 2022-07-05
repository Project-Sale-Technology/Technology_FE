import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../../model/Province";
import {UserRegisterDTO} from "../../dto/UserRegisterDTO";
import {User} from "../../model/User";

const API_URL = "http://localhost:8080/account";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  /* Get list provinces */
  getProvinces(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(`${API_URL}/provinces`);
  }

  /* Create new user */
  handleRegister(data: UserRegisterDTO): Observable<UserRegisterDTO> {
    return this.httpClient.post<UserRegisterDTO>(`${API_URL}/register` , data);
  }

  /* Check user existing */
  checkUserExisting(email: string): Observable<User> {
    return this.httpClient.get<User>(`${API_URL}/check-user-existing/e=${email}`);
  }

  constructor(private httpClient: HttpClient) { }
}
