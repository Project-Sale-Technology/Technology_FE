import { NgModule } from '@angular/core';

import { HomeModuleRoutingModule } from './home-module-routing.module';
import { HomeContactComponent } from './home-contact/home-contact.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import {CommonComponentModule} from "../common-component/common-component.module";
import {CommonModule} from "@angular/common";
import { ChatAppComponent } from './chat-app/chat-app.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MessageComponent } from './chat-app/message/message.component';


@NgModule({
  declarations: [HomeContactComponent, HomeComponent, AboutUsComponent, ChatAppComponent, MessageComponent],
    imports: [
        HomeModuleRoutingModule,
        CommonComponentModule,
        CommonModule,
        ReactiveFormsModule,
    ]
})
export class HomeModuleModule { }
