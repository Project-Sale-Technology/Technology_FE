import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerPersonalComponent } from './customer-personal/customer-personal.component';
import { CustomerHistoryComponent } from './customer-history/customer-history.component';
import { CustomerPaymentComponent } from './customer-payment/customer-payment.component';
import { CustomerFeedbackComponent } from './customer-feedback/customer-feedback.component';


@NgModule({
  declarations: [CustomerPersonalComponent, CustomerHistoryComponent, CustomerPaymentComponent, CustomerFeedbackComponent],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule
  ]
})
export class CustomerModuleModule { }
