import { NgModule } from '@angular/core';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {FooterComponent} from "../common-component/footer/footer.component";


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent, FooterComponent],
  imports: [
    HomeModuleRoutingModule
  ]
})
export class HomeModuleModule { }
