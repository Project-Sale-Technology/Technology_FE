import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateProductComponent} from "./create-product/create-product.component";
import {ListDeleteComponent} from "./list-delete/list-delete.component";
import {UpdateProductComponent} from "./update-product/update-product.component";


const routes: Routes = [
  {path: "product/create-product" , component: CreateProductComponent} ,
  {path: "product/list-products" , component: ListDeleteComponent} ,
  {path: "product/update-product" , component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductModuleRoutingModule { }
