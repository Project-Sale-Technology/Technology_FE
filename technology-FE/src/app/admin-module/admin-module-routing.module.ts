import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeAdminComponent} from "./home-admin/home-admin.component";
import {CustomerConsultantComponent} from "./customer-consultant/customer-consultant.component";


const routes: Routes = [
  {path: "" , component: HomeAdminComponent} ,
  {path: "customer-consultant" , component: CustomerConsultantComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
