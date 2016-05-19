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
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
/**
 * This component shows a router's paths as breadcrumb trails and allows you to navigate to any of them.
 * It subscribes to the router in order to update the breadcrumb trail as you navigate to a component.
 * By providing a RouteConfig the component will be able to use the 'as' name to display in the breadcrumbs links.
 */
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(router) {
        var _this = this;
        this.router = router;
        this._urls = new Array();
        this.router.changes.subscribe(function () {
            _this._urls.length = 0; // Fastest way to clear out array
            console.log(_this.router.urlTree);
            // this.generateBreadcrumbTrail();
        });
    }
    BreadcrumbComponent.prototype.generateBreadcrumbTrail = function (url) {
        this._urls.unshift(url); // Add url to beginning of array (since the url is being recursively broken down from full url to its parent paths)
        if (url.lastIndexOf('/') > 0) {
            this.generateBreadcrumbTrail(url.substr(0, url.lastIndexOf('/'))); // Recursively add parent url
        }
    };
    BreadcrumbComponent.prototype.navigateTo = function (url) {
        this.router.navigateByUrl(url);
    };
    BreadcrumbComponent.prototype.friendlyName = function (url) {
        if (this.routeConfig && url) {
            var route = void 0;
            for (var i = 0; i < this.routeConfig.length; i += 1) {
                route = this.routeConfig[i];
                if (url == route.path) {
                    return route.as;
                }
            }
        }
        return url;
    };
    Object.defineProperty(BreadcrumbComponent.prototype, "urls", {
        get: function () {
            return this._urls;
        },
        set: function (value) {
            this._urls = value;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input('routeConfig'), 
        __metadata('design:type', Array)
    ], BreadcrumbComponent.prototype, "routeConfig", void 0);
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: 'breadcrumb',
            directives: [common_1.FORM_DIRECTIVES, router_1.ROUTER_DIRECTIVES, common_1.NgClass],
            template: "\n      <div>\n          <ul class=\"breadcrumb\">\n              <li *ngFor=\"#url of urls; #last = last\" [ngClass]=\"{'active': last}\"> <!-- disable link of last item -->\n                  <a *ngIf=\"!last\" (click)=\"navigateTo(url)\">{{friendlyName(url)}}</a>\n                  <span *ngIf=\"last\">{{friendlyName(url)}}</span>\n              </li>\n          </ul>\n      </div>\n    ",
            styles: ["\n      .breadcrumb {\n        padding: 8px 15px;\n        margin-bottom: 20px;\n        list-style: none;\n        background-color: transparent;\n        border-radius: 3px;\n      }\n      .breadcrumb > li {\n        display: inline-block;\n      }\n      .breadcrumb > li + li:before {\n        content: \"/\";\n        padding: 0 5px;\n        color: #999999;\n      }\n      .breadcrumb > .active {\n        color: #555555;\n      }\n   "]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;

//# sourceMappingURL=breadcrumb.js.map
