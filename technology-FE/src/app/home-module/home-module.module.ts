import { NgModule } from '@angular/core';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
<<<<<<< HEAD
import {FooterComponent} from "../common-component/footer/footer.component";
=======
import {CommonComponentModule} from "../common-component/common-component.module";
>>>>>>> f8201f4eb05d481af6a53dff1a12041c84c3e873


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent, FooterComponent],
  imports: [
<<<<<<< HEAD
    HomeModuleRoutingModule
=======
    HomeModuleRoutingModule,
    CommonComponentModule,
>>>>>>> f8201f4eb05d481af6a53dff1a12041c84c3e873
  ]
})
export class HomeModuleModule { }
