import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from '../app/app.module';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h1>Breadcrumb Example</h1>
            <breadcrumb></breadcrumb>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {
    constructor(private breadcrumbService: BreadcrumbService) {
        breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
        breadcrumbService.addFriendlyNameForRoute('/comp1/comp2', 'Comp 2');
        breadcrumbService.addFriendlyNameForRoute('/comp1/comp2/comp3', 'Comp 3');
    }
}

@Component({
    selector: 'comp1',
    template: `
        <h3>This is Component 1</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component1 {
    constructor(private router: Router) {
    }

    goTo(): void {
        this.router.navigate(['/comp1/comp2']);
    }
}

@Component({
    selector: 'comp2',
    template: `
        <h3>This is Component 2</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component2 {
    constructor(private router: Router) {
    }

    goTo(): void {
        this.router.navigate(['/comp1/comp2/comp3']);
    }
}

@Component({
    selector: 'comp3',
    template: `
        <h3>This is Component 3</h3>
    `
})
export class Component3 {
    constructor() {
    }
}