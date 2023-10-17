import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MenuComponent } from './Components/menu/menu.component';
import {HashLocationStrategy, LocationStrategy, NgOptimizedImage} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ModelComponent } from './Components/menu/Components/model/model.component';
import {NgxGaugeModule} from "ngx-gauge";

const appRoutes: Routes =[
  {path: '', component: DashboardComponent},
  {path: 'menu', component: MenuComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuComponent,
    ModelComponent
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
