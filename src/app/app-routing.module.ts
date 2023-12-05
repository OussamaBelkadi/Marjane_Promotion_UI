import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {AboutComponent} from "./about/about.component";

const routes : Routes = [
  {path : "", component: AboutComponent},
  {path: "home",  loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)},
  {path: "promotion/dashbord", loadChildren :() => import('./promotion-dashbord/promotion-dashbord.module').then((m) => m.PromotionDashbordModule)},
  {path: "responsable", loadChildren: () => import("./responsable-rayon/responsable-rayon.module").then((m) => m.ResponsableRayonModule) },
  {path: "responsable/dashbord", loadChildren: ()=> import("./responsabledashbord/responsabledashbord-routing.module").then((m)=> m.ResponsabledashbordRoutingModule)}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
