import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPromotionRoutingModule } from './new-promotion-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {NewPromotionComponent} from "./new-promotion.component";


@NgModule({
  declarations: [NewPromotionComponent],
  imports: [
    CommonModule,
    NewPromotionRoutingModule,
    ReactiveFormsModule
  ]
})
export class NewPromotionModule { }
