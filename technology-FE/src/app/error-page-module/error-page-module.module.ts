import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorPageModuleRoutingModule } from './error-page-module-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CommonComponentModule} from "../common-component/common-component.module";


@NgModule({
  declarations: [PageNotFoundComponent],
    imports: [
        CommonModule,
        ErrorPageModuleRoutingModule,
        CommonComponentModule
    ]
})
export class ErrorPageModuleModule { }
