/**
 * Created by liangjz on 4/3/16.
 */

'use strict';

let Router = require('express').Router;

/**
 * Generate a standard rest api for model.
 * @param Model
 * @param path
 * @param options
 *        .all A handler function of all method.
 * @returns {*}
 */
module.exports = function generateStandardRouter(Model, path, options) {
    options = options || {};
    let router = new Router();
    let allHandler = typeof options.all === 'function' ? options.all : (req, res, next) => next();

    router.route(path)
        .all((req, res, next) => allHandler(req, res, next))
        .get((req, res, next) => getAllModels(Model, req, res, next))
        .post((req, res, next) => createNewModel(Model, req, res, next))
        .all((req, res, next) => next(methodNotAllow()));

    router.route(path + '/:id')
        .all((req, res, next) => allHandler(req, res, next))
        .get((req, res, next) => getModelById(Model, req, res, next))
        .post((req, res, next) => updateModelById(Model, req, res, next))
        .delete((req, res, next) => deleteModelById(Model, req, res, next))
        .all((req, res, next) => next(methodNotAllow()));

    return router;
};

function methodNotAllow() {
    let err = new Error('Method Not Allowed');
    err.status = 405;
    return err;
}

function getAllModels(Model, req, res, next) {
    Model.find((err, models) => {
        err ? next(err) : res.json(models);
    })
}

function createNewModel(Model, req, res, next) {
    let body = req.body;
    let model = new Model();
    let keys = Object.keys(body);

    keys.forEach((key) => {
        model[key] = body[key];
    });

    model.save((err) => {
        err ? next(err) : res.json(model);
    });
}

function getModelById(Model, req, res, next) {
    Model.findById(req.params.id, (err, model) => {
        err ? next(err) : res.json(model);
    })
}

function updateModelById(Model, req, res, next) {
    Model.findById(req.params.id, (err, model) => {
        if (err) {
            next(err);
            return;
        }

        let body = req.body;
        let keys = Object.keys(body);

        keys.forEach((key) => {
            model[key] = body[key];
        });

        model.save((err) => {
            err ? next(err) : res.json(model);
        });
    })
}

function deleteModelById(Model, req, res, next) {
    Model.remove({
        _id: req.params.id
    }, (err, model) => {
        err ? next(err) : res.sendStatus(200);
    });
}
