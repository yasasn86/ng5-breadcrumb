# ng2-breadcrumb
This component generates a breadcrumb trail as you navigate to child paths using the @angular/router. Each new route & router-outlet is treated as an endpoint, 
that shows up as a new level in the breadcrumb trail. Its also possible to create a conceptual parent child hierarchy with just sibling routes, using the '%' char when defining a route path. 
For example the below Routes uses a single router-outlet, but will be 3 levels deep in the breadcrumb trail:

	@Routes([
		{ path: '/comp1', component: Component1},
		{ path: '/comp1%comp2', component: Component2},
		{ path: '/comp1%comp2%comp3', component: Component3}
	])

Theres a breadcrumbService that allows you to add friendly names for each of your apps route paths (the friendly name will ultimately show up in the breadcrumb trail):

	constructor(private breadcrumbService: BreadcrumbService) {
		breadcrumbService.addFriendlyNameForRoute('/comp1', 'Comp 1');
		breadcrumbService.addFriendlyNameForRoute('/comp1%comp2', 'Comp 2');
		breadcrumbService.addFriendlyNameForRoute('/comp1%comp2%comp3', 'Comp 3');
	}

For a live example see: https://embed.plnkr.co/H0C1rL2oEM2Bu4XYJNEO/

## Dependencies
Requires bootstrap.css (v 3.x.x) for styling of some elements (although the component is fully functional without it).

## Install
Install the module via npm:

    npm install ng2-breadcrumb --save

## Usage
Import the BreadcrumbService and make it available as a global provider when you bootstrap your app:

	import {BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';

	bootstrap(App, [
		BreadcrumbService
	])

Import both the BreadcrumbComponent & BreadcrumbService into your component and update its list of directives:

	import {BreadcrumbComponent, BreadcrumbService} from 'ng2-breadcrumb/ng2-breadcrumb';

	@Component({
		directives: [BreadcrumbComponent]
	})
	class Component {
		...
	}
	
Inject the BreadcrumbService via the components constructor so you can add friendly names for each of your apps routes:

	constructor(private breadcrumbService: BreadcrumbService) {
		breadcrumbService.addFriendlyNameForRoute('/home', 'Home Sweet Home');
	}

Place the breadcrumb selector in your components html where you added your router-outlet:

	<breadcrumb></breadcrumb>
	<router-outlet></router-outlet>
    
## Build
To compile the project locally just run the default gulp task (ensure you have gulp install globally to do this):

    gulp
