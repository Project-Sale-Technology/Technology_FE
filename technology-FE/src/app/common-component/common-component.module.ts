import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderTopComponent} from "./header-top/header-top.component";
import {HeaderNavbarComponent} from "./header-navbar/header-navbar.component";
import {HeaderMiddleComponent} from "./header-middle/header-middle.component";
import {FooterComponent} from "./footer/footer.component";
import {HeaderFooterComponent} from './header-footer/header-footer.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [HeaderTopComponent, HeaderNavbarComponent, HeaderMiddleComponent, FooterComponent, HeaderFooterComponent],
  exports: [
    HeaderTopComponent,
    HeaderNavbarComponent,
    HeaderMiddleComponent,
    FooterComponent,
    HeaderFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CommonComponentModule {
}
