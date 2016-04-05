/**
 * Created by liangjz on 4/5/16.
 */

import {Component} from 'angular2/core'

@Component({
    selector: 'setting',
    styles: [require('./setting.scss')],
    template: require('./setting.html')
})
export class Setting {
    constructor() {
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
