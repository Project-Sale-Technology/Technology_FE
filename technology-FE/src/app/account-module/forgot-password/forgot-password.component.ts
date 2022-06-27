import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  /* Set name for current page*/
  currentPage = 'Forgot Password';

  constructor() { }

  ngOnInit(): void {
  }

}
