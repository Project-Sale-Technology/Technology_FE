import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModuleRoutingModule } from './menu-module-routing.module';
import { MenuProductComponent } from './menu-product/menu-product.component';


@NgModule({
  declarations: [MenuProductComponent],
  imports: [
    CommonModule,
    MenuModuleRoutingModule
  ]
})
export class MenuModuleModule { }
