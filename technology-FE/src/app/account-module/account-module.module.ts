import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountModuleRoutingModule } from './account-module-routing.module';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [LoginComponent, ChangePasswordComponent, ForgotPasswordComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountModuleRoutingModule
  ]
})
export class AccountModuleModule { }
