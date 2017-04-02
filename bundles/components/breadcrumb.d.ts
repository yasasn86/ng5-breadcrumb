import { OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbService } from './breadcrumbService';
export declare class BreadcrumbComponent implements OnInit, OnChanges {
    private router;
    private breadcrumbService;
    useBootstrap: boolean;
    prefix: string;
    _urls: string[];
    _routerSubscription: any;
    constructor(router: Router, breadcrumbService: BreadcrumbService);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    generateBreadcrumbTrail(url: string): void;
    navigateTo(url: string): void;
    friendlyName(url: string): string;
    ngOnDestroy(): void;
}
