/**
 * Created by liangjz on 4/5/16.
 */

import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../components/directives/router-active';
import {About} from '../about/about';

@Component({
    selector: 'setting',
    directives: [...ROUTER_DIRECTIVES, RouterActive],
    styles: [require('./setting.scss')],
    template: require('./setting.html')
})
@RouteConfig([
    {path: '/personal', component: About, name: 'Personal', useAsDefault: true},
    {path: '/menus', component: About, name: 'Menus'},
    {path: '/orders', component: About, name: 'Orders'},
    {path: '/users', component: About, name: 'Users'}
])
export class Setting {
    menus: Object[] = [
        {name: '我的', route: ['./Personal']},
        {name: '好吃的', route: ['./Menus']},
        {name: '吃过的', route: ['./Orders']},
        {name: '谁来订餐', route: ['./Users']}
    ];

    constructor() {
        console.log(this.menus);
    }

    ngOnInit() {
        console.log('Setting ngOnInit', arguments);
    }

    ngOnChanges(changes) {
        console.log('Setting ngOnChanges', changes);
    }

    ngDoCheck() {
        console.log('Setting ngDoCheck', arguments);
    }

    ngOnDestroy() {
        console.log('Setting ngOnDestroy', arguments);
    }

    ngAfterContentInit() {
        console.log('Setting ngAfterContentInit', arguments);
    }

    ngAfterContentChecked() {
        console.log('Setting ngAfterContentChecked', arguments);
    }

    ngAfterViewInit() {
        console.log('Setting ngAfterViewInit', arguments);
    }

    ngAfterViewChecked() {
        console.log('Setting ngAfterViewChecked', arguments);
    }
}
