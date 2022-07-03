import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ResetPasswordService} from "./service/reset-password.service";
import {checkPwdUsed} from "../validate/ValidateCheckPwdUsed";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token: string;
  tokenCheck: any;

  /* Set name for current page */
  currentPage = 'Reset Password';

  /* Declare form reset password */
  formResetPassword: FormGroup;

  constructor(private router: Router, private fb: FormBuilder
  , private resetPasswordService: ResetPasswordService) {
  }

  ngOnInit(): void {
    /* Get token and check security */
    this.token = window.localStorage.getItem('reset_token');

    /* Check token existing */
    this.tokenCheck = this.resetPasswordService.checkTokenExisting(this.token);

    if(this.tokenCheck == null) {
      this.router.navigate(['/grid-shop/404']);
    } else {
      this.formResetPassword = this.fb.group({
        passwordGroup: this.fb.group({
          password: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)]) , checkPwdUsed(this.resetPasswordService)],
          confirmPassword: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])]
        }, {validators: identityConfirmPassword}),
      })
    }
  }

  /* Handle reset password */
  handleResetPws() {
    const password = this.password.value;

    this.resetPasswordService.handleResetPassword(this.token , password).subscribe(()=> {
      this.router.navigate(['customer/login']);
    } , error => {
      console.log(error.message);
    })
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
