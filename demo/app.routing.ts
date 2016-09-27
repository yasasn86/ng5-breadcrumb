import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component1} from './app.component';
import {Component2} from './app.component';
import {Component3} from './app.component';

export const routes: Routes = [
    { path: '', redirectTo: '/comp1', pathMatch: 'full'},
    { path: 'comp1', component: Component1 },
    { path: 'comp1/comp2', component: Component2 },
    { path: 'comp1/comp2/comp3', component: Component3 }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);