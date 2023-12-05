import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsableRayonRoutingModule } from './responsable-rayon-routing.module';
import {ResponsableRayonComponent} from "./responsable-rayon.component";


@NgModule({
  declarations: [ResponsableRayonComponent],
  imports: [
    CommonModule,
    ResponsableRayonRoutingModule
  ]
})
export class ResponsableRayonModule { }
