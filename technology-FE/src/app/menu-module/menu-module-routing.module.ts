import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuProductComponent} from "./menu-product/menu-product.component";


const routes: Routes = [
  {path: "menu-product" , component: MenuProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuModuleRoutingModule { }
