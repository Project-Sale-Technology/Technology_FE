import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBodyComponent } from './header-body/header-body.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';



@NgModule({
    declarations: [HeaderComponent, FooterComponent, HeaderBodyComponent, HeaderNavbarComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    HeaderBodyComponent,
    HeaderNavbarComponent
  ],
    imports: [

    ]
})
export class CommonModule { }
