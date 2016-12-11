import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs/Rx';

import { RouteName } from '../app/app.module';

@Component({
    selector: 'app',
    template: `
        <div class="container">
            <h1>Breadcrumb Example</h1>
            <breadcrumb [routeName]="routeName"></breadcrumb>
            <router-outlet></router-outlet>
        </div>
    `
})
export class AppComponent {

    routeName(url:string):Observable<string> {
        return new Observable<string>((observer: Subscriber<string>) => {
            var name:string = '';
            if ('/comp1' == url) {
                name = 'Comp 1';
            } else if (new RegExp('^/comp1/comp[0-9]$').exec(url)) {
                name = 'Comp 2';
            } else if ('/comp1/comp2/comp3' == url) {
                name = '';
            } else if (new RegExp('/comp1/comp2/comp3/[0-9]').exec(url)) {
                name = url.slice(url.lastIndexOf('/') + 1, url.length);
            } 
            observer.next(name);
        });
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
        <h3>This is Component 3, which is hidden from the breadcrumb</h3>
        <button (click)="goTo()">Next</button>
    `
})
export class Component3 {
    constructor(private router: Router) {
    }
    
     goTo(): void {
        this.router.navigate(['/comp1/comp2/comp3/' + Math.floor(Math.random()*100))]);
    }
}

@Component({
    selector: 'comp4',
    template: `
        <h3>This is Component 4, which uses a value contained in the url that can be used to lookup an meaningful name</h3>
    `
})
export class Component4 {
    constructor() {
    }
}