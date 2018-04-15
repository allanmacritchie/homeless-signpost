const Bookshelf = require('../lib/bookshelf');

const _ = require('lodash');

module.exports = function(router) {
    router.route('/')
    // TODO:: get all dynamic objects (e.g. Cats) for the page renderer and inject into context
        .get(function (req, res) {
            res.render('index');
        });
};