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
var apis = require('./routes/api');

mongoose.connect('mongodb://localhost/fanfou');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    // we're connected!
    console.log('db connected');
});

router.get('/', (req, res, next) => {
    res.send('Hello World!');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// todo authorize
//app.all('*', authorizeRequire)

app.use('/', router);
app.use('/api', apis);

// error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (err.message) {
        res.status(err.status || 500)
            .send(err.message);
    } else {
        res.sendStatus(err.status || 500);
    }
});

// todo split app and http server
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});
