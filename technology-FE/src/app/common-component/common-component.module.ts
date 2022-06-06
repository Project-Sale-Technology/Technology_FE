import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderTopComponent} from "./header-top/header-top.component";
import {HeaderNavbarComponent} from "./header-navbar/header-navbar.component";
import {HeaderMiddleComponent} from "./header-middle/header-middle.component";
@NgModule({
  declarations: [HeaderTopComponent, HeaderNavbarComponent, HeaderMiddleComponent],
  exports: [
    HeaderTopComponent,
    HeaderNavbarComponent,
    HeaderMiddleComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class CommonComponentModule { }
