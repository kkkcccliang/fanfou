/**
 * Created by liangjz on 4/3/16.
 *
 * Entry file of server
 */

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('./models/user');
var app = express();

mongoose.connect('mongodb://localhost/fanfou');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('db connected');
});

router.get('/', function (req, res, next) {
    res.send('Hello World!');
});

router.get('/api/users', function (req, res, next) {
    User.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);
        res.send(users);
    })
});

app.use(router);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});