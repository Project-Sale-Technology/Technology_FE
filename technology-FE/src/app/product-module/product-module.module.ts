import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModuleRoutingModule } from './product-module-routing.module';
import { ListDeleteComponent } from './list-delete/list-delete.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [ListDeleteComponent, CreateProductComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    ProductModuleRoutingModule
  ]
})
export class ProductModuleModule { }
