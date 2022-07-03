import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../../model/User";

const API_URL = "http://localhost:8080/account";

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  /* Process forget password */
  processPassword(email: string):Observable<any> {
    return this.httpClient.post(`${API_URL}/forgot-password` ,email, {responseType: 'text'});
  }

  constructor(private httpClient: HttpClient) { }
}
