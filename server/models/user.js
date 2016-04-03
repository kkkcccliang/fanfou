/**
 * Created by liangjz on 4/3/16.
 *
 * 订餐系统中的用户定义
 */

'use strict';

var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    id: {
        type: String,
        index: {
            unique: true
        }
    },
    name: String,
    password: String,
    role: { // 用户角色: admin/counter/normal, 系统管理员/订饭帮主/普通用户
        type: String,
        'default': 'normal'
    },
    alipayBarcode: String, // 支付宝二维码url
    wechatBarcode: String, // 微信支付二维码url
});

var User = mongoose.model('users', userSchema);

User.find({id: 'admin'}, (err, users) => {
    if (err) {
        console.log('User.find error', err);
    } else if (users.length === 0) {
        // Add admin by default
        var admin = new User();
        admin.id = 'admin';
        admin.name = 'administrator';
        admin.password = '123456';
        admin.role = 'admin';

        admin.save((err) => {
            if (err) {
                console.log('Save admin by default error', err);
            }
        })
    }
});

module.exports = User;
