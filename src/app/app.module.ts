import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouterModule, Routes} from "@angular/router";
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewPromotionComponent } from './new-promotion/new-promotion.component';
import { PromotionDashbordComponent } from './promotion-dashbord/promotion-dashbord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { ResponsableRayonComponent } from './responsable-rayon/responsable-rayon.component';
import { ResponsabledashbordComponent } from './responsabledashbord/responsabledashbord.component';
import { StatisticPromotionComponent } from './statistic-promotion/statistic-promotion.component';
import {CommonModule} from "@angular/common";

// const routes: Routes = [
//   { path: 'home',loadChildren()=>import('./home/home.module').then((m) => m.HomeModule),},
//   { path: 'about', component: AboutComponent },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route

// ];

@NgModule({
  declarations: [
    // define all component will containing the web component
    AppComponent,
    ResponsabledashbordComponent,
    StatisticPromotionComponent,

  ],
  imports: [
    // import another remote module
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    CommonModule,
    FormsModule

  ],
  providers: [
  // define the service
  ],
  bootstrap: [
    // define the first component will be displayed, when we have the multiple  web component
    AppComponent]
})
export class AppModule { }
