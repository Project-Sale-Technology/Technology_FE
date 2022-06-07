import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {HomeContactComponent} from "./home-contact/home-contact.component";


const routes: Routes = [
  {path: "" , component: HomeComponent} ,
  {path: "home-about-us" , component: AboutUsComponent} ,
  {path: "home-contact" , component: HomeContactComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuleRoutingModule { }
