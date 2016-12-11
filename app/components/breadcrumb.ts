import {Component, Input} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {RouteName} from './routeName';

/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
@Component({
    selector: 'breadcrumb',
    template: `
        <div>
            <ul class="breadcrumb">
                <li *ngFor="let url of _urls; let last = last" [ngClass]="{'active': last}"> <!-- disable link of last item -->
                    <a role="button" *ngIf="!last" (click)="navigateTo(url)">{{ friendlyName(url) | async }}</a>
                    <span *ngIf="last">{{ friendlyName(url) | async }}</span>
                </li>
            </ul>
        </div>
    `
})
export class BreadcrumbComponent {

    @Input()
    routeName: RouteName;

    private _urls: string[];
    private _routerSubrciption: any;

    constructor(private router: Router) {
        this._urls = new Array();
        this._routerSubrciption = this.router.events.subscribe((navigationEnd:NavigationEnd) => {
            this._urls.length = 0; //Fastest way to clear out array
            this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }

    /**
     * Recursively iterates over all the routes contained in the url to build up a breadcrumb trail.
     */
    generateBreadcrumbTrail(url: string): void {
        this.routeName(url).subscribe((name) => {
            if (name) { //If no name is specifed, the route is treated as hidden
                this._urls.unshift(url);
            }

            if (url.lastIndexOf('/') > 0) {
                this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
            }
        });
    }

    navigateTo(url: string): void {
        this.router.navigateByUrl(url);
    }

    /**
     * Uses the bound input observable to find the name that needs to be shown for the specified url.
     */
    friendlyName(url: string): Observable<string> {
        if (url && this.routeName) {
            return this.routeName(url);
        } else {
            return new Observable();
        } 
    }

    ngOnDestroy(): void {
        this._routerSubrciption.unsubscribe();
    }

}
