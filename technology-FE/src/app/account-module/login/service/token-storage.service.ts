import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

/* Set key for token */
const TOKEN_KEY = "auth-token";
const USER_KEY = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private jwtHelper: JwtHelperService) { }

  /* Check if user is logged in */
  public isAuthenticated(): boolean {
    const TOKEN = localStorage.getItem(this.getUser());
    return this.jwtHelper.isTokenExpired(TOKEN);
  }

  /* Get token of user */
  public getUser() {
    if(localStorage.getItem(USER_KEY) !== null) {
      return JSON.parse(localStorage.getItem(USER_KEY));
    } else {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    }
  }
}
