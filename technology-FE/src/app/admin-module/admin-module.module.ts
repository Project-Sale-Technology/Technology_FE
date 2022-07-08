import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import {CommonComponentAdminModule} from "../common-component-admin/common-component-admin.module";
import { CustomerConsultantComponent } from './customer-consultant/customer-consultant.component';


@NgModule({
  declarations: [HomeAdminComponent, CustomerConsultantComponent],
  imports: [
    CommonModule,
    AdminModuleRoutingModule,
    CommonComponentAdminModule
  ]
})
export class AdminModuleModule { }
