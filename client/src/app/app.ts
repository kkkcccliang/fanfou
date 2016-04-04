/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './directives/router-active';
import {Home} from './home/home';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    providers: [...FORM_PROVIDERS],
    directives: [...ROUTER_DIRECTIVES, RouterActive],
    pipes: [],
    styles: [require('./app.scss')],
    template: require('./app.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Index'},
    {path: '/home', component: Home, name: 'Home'},
    {path: '/setting', component: Home, name: 'Setting'},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    {path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About'},
    {path: '/**', redirectTo: ['Index']}
])
export class App {
    constructor() {
    }
}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
