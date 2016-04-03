/**
 * Created by liangjz on 4/3/16.
 *
 * Entry file of server
 */

'use strict';

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var apiUser = require('./routes/api/user');

mongoose.connect('mongodb://localhost/fanfou');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('db connected');
});

router.get('/', function (req, res, next) {
    res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/', router);
app.use('/api', apiUser);

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});
