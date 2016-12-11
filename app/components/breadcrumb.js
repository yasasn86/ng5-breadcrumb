"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var Observable_1 = require('rxjs/Observable');
/**
 * This component shows a breadcrumb trail for available routes the router can navigate to.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router) {
        var _this = this;
        this.router = router;
        this._urls = new Array();
        this._routerSubrciption = this.router.events.subscribe(function (navigationEnd) {
            _this._urls.length = 0; //Fastest way to clear out array
            _this.generateBreadcrumbTrail(navigationEnd.urlAfterRedirects ? navigationEnd.urlAfterRedirects : navigationEnd.url);
        });
    }
    /**
     * Recursively iterates over all the routes contained in the url to build up a breadcrumb trail.
     */
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = function (url) {
        var _this = this;
        this.routeName(url).subscribe(function (name) {
            if (name) {
                _this._urls.unshift(url);
            }
            if (url.lastIndexOf('/') > 0) {
                _this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); //Find last '/' and add everything before it as a parent route
            }
        });
    };
    BreadcrumbComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    /**
     * Uses the bound input observable to find the name that needs to be shown for the specified url.
     */
    BreadcrumbComponent.prototype.friendlyName = function (url) {
        if (url && this.routeName) {
            return this.routeName(url);
        }
        else {
            return new Observable_1.Observable();
        }
    };
    BreadcrumbComponent.prototype.ngOnDestroy = function () {
        this._routerSubrciption.unsubscribe();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Function)
    ], BreadcrumbComponent.prototype, "routeName", void 0);
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'breadcrumb',
            template: "\n        <div>\n            <ul class=\"breadcrumb\">\n                <li *ngFor=\"let url of _urls; let last = last\" [ngClass]=\"{'active': last}\"> <!-- disable link of last item -->\n                    <a role=\"button\" *ngIf=\"!last\" (click)=\"navigateTo(url)\">{{ friendlyName(url) | async }}</a>\n                    <span *ngIf=\"last\">{{ friendlyName(url) | async }}</span>\n                </li>\n            </ul>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.js.map