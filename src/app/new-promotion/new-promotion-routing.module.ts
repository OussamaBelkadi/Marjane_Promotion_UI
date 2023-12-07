import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NewPromotionComponent} from "./new-promotion.component";

const routes: Routes = [
  { path: '', component: NewPromotionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPromotionRoutingModule { }
