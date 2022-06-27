import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "./service/authentication.service";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* set name for current page */
  currentPage = 'Login';
  alertMessageError = false;

  /* Initialize form login */
  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router
    , private authenticationService: AuthenticationService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    /* Set variable and validate for login form */
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required,
        Validators.minLength(17), Validators.pattern("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    })
  }

  handleLogin() {
    this.authenticationService.handleLogin(this.formLogin.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        }
      })
  }

  /* Getter  for form login */
  get email() {
    return this.formLogin.get('email');
  }

  get password() {
    return this.formLogin.get('password');
  }
}
