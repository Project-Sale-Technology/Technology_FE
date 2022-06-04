import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBodyComponent } from './header-body/header-body.component';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, HeaderBodyComponent],
    exports: [
        HeaderComponent,
        FooterComponent,
        HeaderBodyComponent
    ],
    imports: [

    ]
})
export class CommonModule { }
