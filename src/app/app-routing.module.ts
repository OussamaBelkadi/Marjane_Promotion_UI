import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes : Routes = [
  {path : "promotion", component: AboutComponent},
  {path : "home", component: HomeComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
