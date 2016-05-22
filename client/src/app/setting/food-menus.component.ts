/**
 * Created by liangjz on 4/7/16.
 */

import {Component} from '@angular/core';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MdButton} from '@angular2-material/button';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

@Component({
  selector: 'food-menus',
  directives: [MD_INPUT_DIRECTIVES, MdButton, MD_LIST_DIRECTIVES],
  template: require('./food-menus.html')
})
export class FoodMenus {
  constructor() {
  }
}
