/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let standardize = require('./standard');
let Restaurant = require('../../models/restaurant');

module.exports = standardize(Restaurant, '/restaurant');
