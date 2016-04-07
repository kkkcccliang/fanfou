/**
 * Created by liangjz on 4/5/16.
 */

import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {RouterActive} from '../components/directives/router-active';
import {Personal} from './personal';
import {FoodMenus} from './food-menus';
import {Orders} from './orders';
import {Users} from './users';

interface MenuObject {
    name: string,
    route: Array<any>
}

@Component({
    selector: 'setting',
    directives: [...ROUTER_DIRECTIVES, RouterActive],
    styles: [require('./setting.scss')],
    template: require('./setting.html')
})
@RouteConfig([
    {path: '/personal', component: Personal, name: 'Personal', useAsDefault: true},
    {path: '/foodMenus', component: FoodMenus, name: 'FoodMenus'},
    {path: '/orders', component: Orders, name: 'Orders'},
    {path: '/users', component: Users, name: 'Users'}
])
export class Setting {
    menus: Array<MenuObject> = [
        {name: '我的', route: ['./Personal']},
        {name: '好吃的', route: ['./FoodMenus']},
        {name: '吃过的', route: ['./Orders']},
        {name: '谁来订餐', route: ['./Users']}
    ];

    constructor(
        public router: Router
    ) {
    }

    ngOnInit() {
        console.log('Setting ngOnInit', arguments);
        // not work in child component?
        this.router.subscribe((...args) => {
            console.log(args);
        });
    }

    // ngOnChanges(changes) {
    //     console.log('Setting ngOnChanges', changes);
    // }
    //
    // ngDoCheck() {
    //     console.log('Setting ngDoCheck', arguments);
    // }
    //
    // ngOnDestroy() {
    //     console.log('Setting ngOnDestroy', arguments);
    // }
    //
    // ngAfterContentInit() {
    //     console.log('Setting ngAfterContentInit', arguments);
    // }
    //
    // ngAfterContentChecked() {
    //     console.log('Setting ngAfterContentChecked', arguments);
    // }
    //
    // ngAfterViewInit() {
    //     console.log('Setting ngAfterViewInit', arguments);
    // }
    //
    // ngAfterViewChecked() {
    //     console.log('Setting ngAfterViewChecked', arguments);
    // }
}
