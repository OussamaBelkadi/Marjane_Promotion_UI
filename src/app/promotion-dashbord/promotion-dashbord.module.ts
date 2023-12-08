import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PromotionDashbordRoutingModule } from './promotion-dashbord-routing.module';
import {PromotionDashbordComponent} from "./promotion-dashbord.component";
import {FormsModule} from "@angular/forms";
import {HightlightDirective} from "../hightlight.directive";


@NgModule({
  declarations: [PromotionDashbordComponent],
    imports: [
        PromotionDashbordRoutingModule,
        FormsModule,
        CommonModule,
        HightlightDirective
    ]
})
export class PromotionDashbordModule { }
