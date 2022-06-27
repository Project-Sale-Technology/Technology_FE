import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {TokenStorageService} from "./token-storage.service";
import {Observable} from "rxjs";
import {decode} from "querystring";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  /* CanActive used for authentication ,
  * CanActiveChild used for authorization */

  constructor(private router: Router ,
              private tokenStorageService: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const token = localStorage.getItem(this.tokenStorageService.getUser());

    // decode the token to get its payload
    const tokenPayload = decode(token);

    if(!this.tokenStorageService.isAuthenticated() || tokenPayload.roles !== expectedRole) {
      this.router.navigateByUrl("/customer/login");
      return false;
    } else {
      return true;
    }
  }
}
