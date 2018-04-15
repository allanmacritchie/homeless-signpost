const Bookshelf = require('../../lib/bookshelf');

const Service = require('../../models').Service;
const Services = require('../../collections').Services;

module.exports = function(router) {
    router.route('/api/services')
    // fetch all books
        .get(function (req, res) {
            Services.forge()
                .fetch()
                .then(function (collection) {
                    res.json({error: false, data: collection.toJSON()});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        })
};