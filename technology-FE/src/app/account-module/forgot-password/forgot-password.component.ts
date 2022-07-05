import {Component, OnInit} from '@angular/core';
import {ForgotPasswordService} from "./service/forgot-password.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  /* Set name for current page*/
  currentPage = 'Forgot Password';

  /* Initialize form */
  formSendEmail: FormGroup;

  /* Set data to send mail */
  token: string;
  checkSentToMail: boolean;

  constructor(private forgotPasswordService: ForgotPasswordService
    , private fb: FormBuilder ,private cookieService: CookieService) {
  }

  ngOnInit(): void {
    /* Set variables for form */
    this.formSendEmail = this.fb.group({
      email: ['',
        Validators.compose([Validators.required, Validators.pattern("^\\w+([-+.']\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"), Validators.minLength(17)])],
    })
  }

  sendRequest() {
    console.log('hi')
    const email = this.email.value;
    const dateNow = new Date();
    dateNow.setMinutes(dateNow.getMinutes() + 10); // 10 minutes

    this.forgotPasswordService.processPassword(email).subscribe(token => {
      this.token = token;

      /* Set cookie for token with 10 minutes */
      this.cookieService.set('tokenPassword' , token , dateNow);

      this.checkSentToMail = true;
    } , error => {
      this.checkSentToMail = false;
    });
  }

  /* Getter variable for form */
  get email() {
    return this.formSendEmail.get('email');
  }
}
