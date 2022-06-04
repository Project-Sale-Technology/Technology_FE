import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerPersonalComponent} from "./customer-personal/customer-personal.component";
import {CustomerHistoryComponent} from "./customer-history/customer-history.component";
import {CustomerFeedbackComponent} from "./customer-feedback/customer-feedback.component";


const routes: Routes = [
  {path: "customer/:id/personal-info" , component: CustomerPersonalComponent} ,
  {path: "customer/:id/history" , component: CustomerHistoryComponent} ,
  {path: "customer/:id/payment" , component: CustomerHistoryComponent} ,
  {path: "customer/:id/feedback" , component: CustomerFeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
