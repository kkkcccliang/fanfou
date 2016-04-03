/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let standardize = require('./standard');
let User = require('../../models/user');

let router = standardize(User, '/users', {all: allHandler});

function allHandler(req, res, next) {
    //console.log(req.path, req.params, req.method);

    if (req.method === 'POST' && req.body && req.body.id) {
        req.body.id = req.body.id.toLowerCase();
    }

    next();
}

module.exports = router;
