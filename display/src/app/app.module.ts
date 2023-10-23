import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MenuComponent } from './Components/menu/menu.component';
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ModelComponent } from './Components/menu/Components/model/model.component';
import {NgxGaugeModule} from "ngx-gauge";
import { Dashboardv2Component } from './Components/dashboardv2/dashboardv2.component';

const appRoutes: Routes =[
  {path: 'ds', component: DashboardComponent},
  {path: '', component: Dashboardv2Component},
  {path: 'menu', component: MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ModelComponent,
    Dashboardv2Component
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        NgOptimizedImage,
        NgxGaugeModule,
    ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
