/**
 * Created by liangjz on 4/3/16.
 *
 * 菜单. 需要属于某个餐馆
 */

'use strict';

var mongoose = require('mongoose');

var defaultExpire = new Date();
defaultExpire.setYear(2020);
defaultExpire.setMonth(11); // Month starts from zero
defaultExpire.setDate(31);
defaultExpire.setHours(23);
defaultExpire.setMinutes(59);
defaultExpire.setSeconds(59);
defaultExpire.setMilliseconds(999);

var menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    expire: { // 菜单的过期日期
        type: Date,
        'default': defaultExpire
    },
    restaurant_id: String, // 餐馆的id(mongo的_id)
    imageUrl: String // 菜单的图片链接
});

module.exports = mongoose.model('menu', menuSchema);
