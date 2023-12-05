import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResponsabledashbordComponent} from "./responsabledashbord.component";

const routes: Routes = [
  {path:'', component: ResponsabledashbordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsabledashbordRoutingModule { }
