export declare class BreadcrumbService {
    private routesFriendlyNames;
    private routesFriendlyNamesRegex;
    private routesWithCallback;
    private routesWithCallbackRegex;
    private hideRoutes;
    private hideRoutesRegex;
    addFriendlyNameForRoute(route: string, name: string): void;
    addFriendlyNameForRouteRegex(routeRegex: string, name: string): void;
    addCallbackForRoute(route: string, callback: (id: string) => string): void;
    addCallbackForRouteRegex(routeRegex: string, callback: (id: string) => string): void;
    getFriendlyNameForRoute(route: string): string;
    hideRoute(route: string): void;
    hideRouteRegex(routeRegex: string): void;
    isRouteHidden(route: string): boolean;
}
