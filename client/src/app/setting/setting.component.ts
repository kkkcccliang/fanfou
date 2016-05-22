/**
 * Created by liangjz on 4/5/16.
 */

import {Component} from '@angular/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {RouterActive} from '../router-active';
import {Personal} from './personal.component';
import {FoodMenus} from './food-menus.component';
import {Orders} from './orders.component';
import {Users} from './users.component';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

interface MenuObject {
  name: string,
  route: Array<any>
}

@Component({
  selector: 'setting',
  directives: [...ROUTER_DIRECTIVES, RouterActive, MD_LIST_DIRECTIVES],
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
    {name: '餐馆菜单', route: ['./FoodMenus']},
    {name: '历史订单', route: ['./Orders']},
    {name: '谁订餐', route: ['./Users']},
    {name: '我', route: ['./Personal']}
  ];

  constructor(private _router: Router) {
  }

  // TODO RouterActive is not working in child component, use this
  isRouteActive(route) {
    return this._router.isRouteActive(this._router.generate(route));
  }

  getPageHeader() {
    let pageHeader = '';
    this.menus.forEach((menu) => {
      if (this.isRouteActive(menu.route)) {
        pageHeader = menu.name;
        return;
      }
    });
    return pageHeader;
  }

  ngOnInit() {
    console.log('Setting ngOnInit', arguments);
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
