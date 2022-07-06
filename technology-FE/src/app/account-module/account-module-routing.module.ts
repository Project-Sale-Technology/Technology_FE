import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";


const routes: Routes = [
  {
    path: "customer/register", component: RegisterComponent
  },
  {path: "customer/login", component: LoginComponent},
  {path: "customer/forgot-password", component: ForgotPasswordComponent},
  {path: "customer/change-password", component: ChangePasswordComponent},
  {path: "customer/reset-password/:token" , component: ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule {
}
