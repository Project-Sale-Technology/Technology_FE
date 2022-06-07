import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListOrderComponent} from "./list-order/list-order.component";
import {OrderDetailComponent} from "./order-detail/order-detail.component";


const routes: Routes = [
  {path: "list-orders" , component: ListOrderComponent} ,
  {path: "order/:id/detail" , component: OrderDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderModuleRoutingModule { }
