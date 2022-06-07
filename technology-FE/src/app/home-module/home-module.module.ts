import { NgModule } from '@angular/core';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
<<<<<<< HEAD
import {FooterComponent} from "../common-component/footer/footer.component";
=======
>>>>>>> d181605437610fabeecfda2e702d9aef3eb89769
import {CommonComponentModule} from "../common-component/common-component.module";


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent, FooterComponent],
  imports: [
    HomeModuleRoutingModule,
    CommonComponentModule,
  ]
})
export class HomeModuleModule { }
