import {Injectable} from "@angular/core";

@Injectable()
export class BreadcrumbService {

    private routeFriendlyNames: any = {}; //{'route1/route2':'Route 2'}
    private hideRoutes: Array<string> = new Array<string>();

    /**
     * Specify a friendly name for the corresponding route. Please note this should be the full url of the route,
     * as in the same url you will use to call router.navigate().
     *
     * @param route
     * @param name
     */
    addFriendlyNameForRoute(route: string, name: string): void {
        this.routeFriendlyNames[route] = name;
    }

    /**
     * Show the friendly name for a given url. If no match is found the url (without the leading '/') is shown.
     *
     * @param route
     * @returns {*}
     */
    getFriendlyNameForRoute(route: string): string {
        var val = this.routeFriendlyNames[route];
        if (!val) {
            val = route.substr(route.lastIndexOf('/')+1, route.length);
        }

        return val;
    }
    
    /**
     * Specify a route (url) that should not be shown in the breadcrumb.
     */
    hideRoute(route: string): void {
        if (!this.hideRoutes.includes(route)) {
            this.hideRoutes.push(route);
        }
    }
    
    /**
     * Get a list of all the routes that should not show as part of the breadcrumb trail.
     */
    getHiddenRoutes(): string[] {
        return this.hideRoutes;
    }
}
