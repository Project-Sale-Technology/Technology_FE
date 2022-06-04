import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListFeedbackComponent} from "./list-feedback/list-feedback.component";
import {DetailFeedbackComponent} from "./detail-feedback/detail-feedback.component";


const routes: Routes = [
  {path: "list-feedback" , component: ListFeedbackComponent} ,
  {path: "feedback/:id/detail" , component: DetailFeedbackComponent} ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackModuleRoutingModule { }
