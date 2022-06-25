import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AccountService} from "../service/account.service";
import {Router} from "@angular/router";

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

  constructor(private fb: FormBuilder , private accountService: AccountService , private router: Router) {
  }

  ngOnInit(): void {
    /* Set variable and validate for login form */
    this.formLogin = this.fb.group({
      email: ['', Validators.compose([Validators.required,
        Validators.minLength(17), Validators.pattern("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$")])],
      password: ['' , Validators.compose([Validators.required , Validators.minLength(4)])]
    })
  }

  handleLogin() {
    const email = this.email.value;
    const password = this.password.value;
    this.accountService.handleLogin(email , password).subscribe(data=> {
      if(data == null) {
        this.formLogin.reset();
        this.alertMessageError = true;
      } else {
        this.router.navigateByUrl("");
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
