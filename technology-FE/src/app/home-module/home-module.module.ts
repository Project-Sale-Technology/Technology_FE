import { NgModule } from '@angular/core';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {CommonModule} from "../common/common.module";


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent],
  imports: [
    CommonModule,
    HomeModuleRoutingModule,
    CommonModule
  ]
})
export class HomeModuleModule { }
