const Bookshelf = require('../lib/bookshelf');

const Service = require('../models').Service;
const Services = require('../collections').Services;

const _ = require('lodash');

module.exports = function(router) {
    router.route('/service/:id')
    // fetch all services
        .get(function (req, res) {
            Service
                .query('where', 'id', '=', req.params.id)
                .fetch({
                    // withRelated: ['Categories']
                })
                .then(function (service) {
                    service = service.toJSON();
                    console.log(service);
                    res.render('service', {
                        service: service
                    });
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        });
};