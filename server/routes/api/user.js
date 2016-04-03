/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let router = require('express').Router();

let User = require('../../models/user');

router.route('/users')
    .get((req, res) => {
        User.find((err, users) => {
            if (err) return console.error(err);
            console.log(users);
            res.send(users);
        });
    })
    .post((req, res) => {
        let body = req.body;
        if (!body.id) {
            console.log('id must provided');
            res.json({code: 1, message: 'error'}); // todo standard response
            return;
        }

        let user = new User();
        user.id = body.id;
        user.name = body.name;
        user.password = body.password;
        user.save((err) => {
            if (err) {
                return res.send(err); // todo should return res.send ?
            }

            res.json({code: 0, message: 'User created!'});
        });
    });

router.route('/users/:id')
    .get((req, res) => {
        User.findById(req.params.id, (err, user) => {
            if (err) {
                return res.send(err);
            }

            res.send(user);
        });
    })
    .post((req, res) => {

        User.findById(req.params.id, (err, user) => {
            if (err) {
                return res.send(err);
            }

            let body = req.body;
            user.name = body.name || user.name;
            user.password = body.password || user.password;
            user.save((err) => {
                if (err) {
                    res.send(err);
                    return;
                }

                res.json(user);
            });
        });
    })
    .delete((req, res) => {
        User.remove({
            _id: req.params.id
        }, function (err, user) {
            if (err) {
                res.send(err);
                return;
            }

            res.json({code: 0, message: 'Successfully deleted'});
        });
    });

module.exports = router;
