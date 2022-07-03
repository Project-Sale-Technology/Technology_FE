import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResetPasswordService} from "./service/reset-password.service";
import {checkPwdUsed} from "../validate/ValidateCheckPwdUsed";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string;
  tokenCheck: any;

  /* Get token from link to check existing */
  tokenLink: string;
  tokenCheckExisting: boolean;

  /* Set name for current page */
  currentPage = 'Reset Password';

  /* Declare form reset password */
  formResetPassword: FormGroup;

  constructor(private router: Router, private fb: FormBuilder , private activatedRoute: ActivatedRoute
  , private resetPasswordService: ResetPasswordService , private cookieService: CookieService) {
  }

  ngOnInit(): void {
    /* Check token existing */
    this.tokenLink = this.activatedRoute.snapshot.params['token'];

    /* Check token password existing to redirect 404 */
    this.tokenCheckExisting = this.checkTokenExisting();

    if(this.tokenCheckExisting) {
      this.formResetPassword = this.fb.group({
        passwordGroup: this.fb.group({
          password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)]) , checkPwdUsed(this.resetPasswordService)],
          confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])]
        }, {validators: identityConfirmPassword}),
      })
    } else {
      this.router.navigate(['error/404']);
    }
  }

  /* Handle reset password */
  handleResetPws() {
    const password = this.password.value;
    const check = this.cookieService.get('tokenPassword');

    if(check) {
      this.tokenCheck = true;
      this.resetPasswordService.handleResetPassword(this.token , password).subscribe(()=> {
        this.router.navigate(['customer/login']);
        /* Remove token */
        this.cookieService.delete('tokenPassword');

      } , error => {
        console.log(error.message);
      })
    } else {
      this.tokenCheck = false;
    }
  }

  /* Check exciting cookie token reset password */
  checkTokenExisting() {
    const token = this.cookieService.get('tokenPassword');
    if(token === this.tokenLink) {
     return true;
    } else {
      return false;
    }
  }

  /* Getter variables form */
  get passwordGroup() {
    return this.formResetPassword.get('passwordGroup');
  }

  get password() {
    return this.formResetPassword.get(['passwordGroup' , 'password']);
  }

  get confirmPassword() {
    return this.formResetPassword.get(['passwordGroup' , 'confirmPassword']);
  }
}

function identityConfirmPassword(control: AbstractControl) {
  const formControl = control.value;
  return formControl.password === formControl.confirmPassword ? null : {identityPassword: true};
}
