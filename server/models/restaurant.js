/**
 * Created by liangjz on 4/3/16.
 *
 * 餐馆
 */

'use strict';

var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    isActive: Boolean, // 当前订饭的餐馆
    name: String,
    tel: String // 餐馆电话
});

module.exports = mongoose.model('restaurant', restaurantSchema);
