import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateEmployeeComponent} from "./create-employee/create-employee.component";
import {UpdateEmployeeComponent} from "./update-employee/update-employee.component";
import {ListEmployeeComponent} from "./list-employee/list-employee.component";


const routes: Routes = [
  {path: "employee" , component: ListEmployeeComponent} ,
  {path: "employee/create-employee" , component: CreateEmployeeComponent} ,
  {path: "employee/:id/update" , component: UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeModuleRoutingModule { }
