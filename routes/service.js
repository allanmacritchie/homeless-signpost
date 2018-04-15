const Bookshelf = require('../lib/bookshelf');

const Service = require('../models').Service;
const Asset = require('../models').Asset;

const _ = require('lodash');

module.exports = function(router) {
    router.route('/service/:id')
    // fetch all services
        .get(function (req, res) {
            let response = {};
            Service
                .query('where', 'id', '=', req.params.id)
                .fetch({
                    // withRelated: ['Categories']
                })
                .then(function (service) {
                    response.service = service.toJSON();
                    console.log(response);
                    console.log(req.params);
                    return Asset
                        .query('where', 'service_id', '=', req.params.id)
                        .fetch({
                            // withRelated: ['Categories']
                        })
                })
                .then(function (assets) {
                    console.log(assets);
                    if(assets) {
                        response.assets = assets.toJSON();
                    } else {
                        response.assets = [];
                    }
                    if(typeof response.assets.length === 'undefined') {
                        response.assets = [response.assets];
                    };
                    res.render('service', response);
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        });
};