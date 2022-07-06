import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const API_URL = "http://localhost:8080/account";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  /* Check token existing */
  checkTokenExisting(token: string): Observable<any> {
    return this.httpClient.get(`${API_URL}/reset-password?token=${token}`);
  }

  /* Handle previously used password */
  checkPasswordUsed(token: string , password: string): Observable<any> {
    return this.httpClient.get(`${API_URL}/reset-password/check-password?token=${token}&password=${password}`);
  }

  /* Handle reset password */
  handleResetPassword(token: string, password: string): Observable<any> {
    return this.httpClient.patch(`${API_URL}/reset-password?token=${token}&password=${password}`, {
      token,
      password
    }, {responseType: 'text'})
  }

  constructor(private httpClient: HttpClient) { }
}
