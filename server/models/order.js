/**
 * Created by liangjz on 4/3/16.
 * 
 * 用户下的某个订单
 */

'use strict';

var mongoose = require("mongoose");

var orderSchema = new mongoose.Schema({
    name: String, // 订单的名称, 可随意写, 在前台选择菜单时默认是此菜单的名称
    price: Number, // 订单价格, 如果是选定了某个菜单, 则是此菜单的价格
    remark: String, // 备注
    userId: String, // 哪个用户下的订单
    orderSession_id: String, // 属于哪个订餐
});

module.exports = mongoose.model('order', orderSchema);
