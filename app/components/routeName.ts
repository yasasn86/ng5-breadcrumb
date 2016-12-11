import {Observable} from 'rxjs/Observable';

export interface RouteName {
    (url:string):Observable<string>;
}