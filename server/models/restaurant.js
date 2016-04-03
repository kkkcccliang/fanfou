/**
 * Created by liangjz on 4/3/16.
 * 
 * 餐馆
 */


var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
    isActive: Boolean, // 当前订饭的餐馆
    name: String
});

module.exports = mongoose.model('restaurant', restaurantSchema);