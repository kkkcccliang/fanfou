/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let standardize = require('./standard');
let Order = require('../../models/order');

module.exports = standardize(Order, '/orders');
