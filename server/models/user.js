/**
 * Created by liangjz on 4/3/16.
 * 
 * 订餐系统中的用户定义
 */


var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    id: String,
    name: String,
    password: String,
    role: { // 用户角色: admin/counter/normal, 系统管理员/订饭帮主/普通用户
        type: String,
        'default': 'normal'
    },
    alipayBarcode: String, // 支付宝二维码url
    wechatBarcode: String, // 微信支付二维码url
});

module.exports = mongoose.model('users', userSchema);