import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { FooterAdminComponent } from './footer-admin/footer-admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import {RouterModule} from "@angular/router";



@NgModule({
    declarations: [HeaderAdminComponent, FooterAdminComponent, NavbarAdminComponent],
  exports: [
    NavbarAdminComponent,
    HeaderAdminComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CommonComponentAdminModule { }
