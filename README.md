# ng2-breadcrumb
This is an angular 2 component that creates a breadcrumb trail. It hooks into the angular2/router, to dynamically build up the crumb trail once a component is routed to.
For a live example see: https://plnkr.co/moszmD

## Dependencies
Requires bootstrap.css (v 3.x.x) for styling of some elements (although the component is fully functional without it).

## Install
Install the module via npm:

    npm install ng2-breadcrumb --save

## Usage
Import the BreadcrumbComponent into your component:

	import {BreadcrumbComponent} from 'ng2-breadcrumb/ng2-breadcrumb';

Add it to your components list of directives:

	@Component({
		directives: [
			BreadcrumbComponent
		]
	})

Place the selector in your html and optionally pass it your `@RouterConfig`. The router config is used to display the 'as' name (rather then just the url path) in the breadcrumb trail.

	<breadcrumb [routeConfig]="routeConfig"></breadcrumb>

In order to extract your components *@RouterConfig* from your classes annotation (decorator), you can put the following in your constructor. 
Be sure create the *routeConfig* variable in your class and swap in your component in the *getOwnMetadata('annotations', MyComponent) * function.
    
    public routeConfig: String[];
    
	constructor() {
		// Read the RouteConfig annotation so we can pass it to the breadcrumb component
		let annotations = Reflect.getOwnMetadata('annotations', MyComponent);
		for (let i = 0; i < annotations.length; i += 1) {
			if (annotations[i].constructor.name === 'RouteConfig') {
				this.routeConfig = annotations[i].configs;
			}
		}
	}
    
## Build
To compile the project locally just run the default gulp task:

    gulp
