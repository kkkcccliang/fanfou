/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let standardize = require('./standard');
let Menu = require('../../models/menu');

module.exports = standardize(Menu, '/menus');
