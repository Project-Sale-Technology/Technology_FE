import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderModuleRoutingModule } from './order-module-routing.module';
import { ListOrderComponent } from './list-order/list-order.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';


@NgModule({
  declarations: [ListOrderComponent, OrderDetailComponent],
  imports: [
    CommonModule,
    OrderModuleRoutingModule
  ]
})
export class OrderModuleModule { }
