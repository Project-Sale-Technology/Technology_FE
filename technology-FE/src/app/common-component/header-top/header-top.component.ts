import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../../account-module/login/service/authentication.service";
import {User} from "../../model/User";
import {AccountService} from "../../account-module/service/account.service";

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements OnInit {

  /* Get user */
  user: User;

  @Input() checkToastLogin: boolean = false;

  constructor(private authenticationService: AuthenticationService ,
              private accountService: AccountService) {
    this.authenticationService.user.subscribe(data => {
      this.user = data;
    });
  }

  ngOnInit(): void {
  }

  logout() {
    this.authenticationService.logout();
  }

  /* Show toast login */
  showToast() {
    if(this.checkToastLogin) {
      // document.getElementsByClassName('toast-alert').classList.add('')
    }
  }
}
