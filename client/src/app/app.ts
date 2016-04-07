/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './components/directives/router-active';
import {Home} from './home/home';
import {Setting} from './setting/setting';

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
    {path: '/home', component: Home, name: 'Home', useAsDefault: true},
    {path: '/setting/...', component: Setting, name: 'Setting'},
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    {path: '/about', loader: () => require('es6-promise!./about/about')('About'), name: 'About'},
    {path: '/**', redirectTo: ['Home']}
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
