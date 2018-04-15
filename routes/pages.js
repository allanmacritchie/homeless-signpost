const Bookshelf = require('../lib/bookshelf');

const _ = require('lodash');

module.exports = function(router) {
    router.route('/')
    // fetch all services
        .get(function (req, res) {
            res.render('index');
        });
};