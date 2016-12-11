import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbComponent } from './components/breadcrumb';
import { RouteName } from './components/routeName';

export * from './components/breadcrumb';
export * from './components/routeName';

@NgModule({
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

export class Ng2BreadcrumbModule { }