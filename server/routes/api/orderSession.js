/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let standardize = require('./standard');
let OrderSession = require('../../models/orderSession');

module.exports = standardize(OrderSession, '/orderSession');
