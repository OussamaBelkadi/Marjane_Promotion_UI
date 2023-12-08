import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StatisticPromotionComponent} from "./statistic-promotion.component";

const routes: Routes = [{path:"", component: StatisticPromotionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticPromotionRoutingModule { }
