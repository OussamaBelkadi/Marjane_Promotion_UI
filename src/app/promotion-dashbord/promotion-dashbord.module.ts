import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionDashbordRoutingModule } from './promotion-dashbord-routing.module';
import {PromotionDashbordComponent} from "./promotion-dashbord.component";


@NgModule({
  declarations: [PromotionDashbordComponent],
  imports: [
    CommonModule,
    PromotionDashbordRoutingModule
  ]
})
export class PromotionDashbordModule { }
