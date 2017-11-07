import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Component1, Component2, Component3, Component4 } from './app.component';
import { routingModule, appRoutingProviders }  from './app.routing';

import { Ng5BreadcrumbModule } from './components/breadcrumb/breadcrumb.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from './components/breadcrumb/breadcrumb.service';


@NgModule({
  declarations: [
    BreadcrumbComponent,
    AppComponent,
    Component1,
    Component2,
    Component3,
    Component4    
  ],
  imports: [
    BrowserModule,
    routingModule    
  ],
  providers: [BreadcrumbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
