import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent],
  imports: [
    CommonModule,
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
