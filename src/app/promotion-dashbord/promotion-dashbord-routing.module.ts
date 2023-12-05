import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PromotionDashbordComponent} from "./promotion-dashbord.component";

const routes: Routes = [
  {path: '', component: PromotionDashbordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromotionDashbordRoutingModule { }
