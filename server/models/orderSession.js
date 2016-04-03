/**
 * Created by liangjz on 4/3/16.
 *
 * 订单会话. 嗯, 名字可能起得不好, 意思是指一次新的订餐
 */

'use strict';

var mongoose = require('mongoose');

var orderSessionSchema = new mongoose.Schema({
    desc: String,
    dateStart: { // 订餐开始日期, 默认是新建时的时间
        type: Date,
        'default': Date.now()
    },
    dateEnd: Date // 订餐结束日期, 用户手工结束时, 或日结后
});

module.exports = mongoose.model('orderSession', orderSessionSchema);
