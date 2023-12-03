import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResponsableRayonComponent} from "./responsable-rayon.component";

const routes: Routes = [
  {path:"", component: ResponsableRayonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsableRayonRoutingModule { }
