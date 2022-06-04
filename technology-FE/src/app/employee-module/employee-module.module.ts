import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeModuleRoutingModule } from './employee-module-routing.module';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';


@NgModule({
  declarations: [CreateEmployeeComponent, ListEmployeeComponent, UpdateEmployeeComponent],
  imports: [
    CommonModule,
    EmployeeModuleRoutingModule
  ]
})
export class EmployeeModuleModule { }
