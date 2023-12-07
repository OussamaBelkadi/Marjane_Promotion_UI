import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionDashbordRoutingModule } from './promotion-dashbord-routing.module';
import {PromotionDashbordComponent} from "./promotion-dashbord.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [PromotionDashbordComponent],
  imports: [
    PromotionDashbordRoutingModule,
    FormsModule,
    CommonModule

  ]
})
export class PromotionDashbordModule { }
