var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb';
import { BreadcrumbService } from './components/breadcrumbService';
export * from './components/breadcrumb';
export * from './components/breadcrumbService';
var Ng2BreadcrumbModule = Ng2BreadcrumbModule_1 = (function () {
    function Ng2BreadcrumbModule() {
    }
    Ng2BreadcrumbModule.forRoot = function () {
        return {
            ngModule: Ng2BreadcrumbModule_1,
            providers: [BreadcrumbService]
        };
    };
    return Ng2BreadcrumbModule;
}());
Ng2BreadcrumbModule = Ng2BreadcrumbModule_1 = __decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        declarations: [
            BreadcrumbComponent
        ],
        exports: [
            BreadcrumbComponent
        ]
    })
], Ng2BreadcrumbModule);
export { Ng2BreadcrumbModule };
var Ng2BreadcrumbModule_1;
