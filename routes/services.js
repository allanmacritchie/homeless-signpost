const Bookshelf = require('../lib/bookshelf');

const Service = require('../models').Service;
const Services = require('../collections').Services;

const _ = require('lodash');

module.exports = function(router) {
    router.route('/Services')
    // fetch all Services
        .get(function (req, res) {
                Services.forge().fetch({
                    // withRelated: ['ServiceHours']
                })
                    .then(function (Services) {
                        Services = Services.toJSON();
                        res.render('Services', {
                            services: Services
                        });
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    });
            });

};