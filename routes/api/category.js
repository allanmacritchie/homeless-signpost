const Bookshelf = require('../../lib/bookshelf');

const Category = require('../../models').Category;
const Categories = require('../../collections').Categories;

const _ = require('lodash');

module.exports = function(router) {
    router.route('/api/category/:id')
    // fetch all categories
        .get(function (req, res) {
            console.log("category");
            Category
                .query('where', 'id', '=', req.params.id)
                .fetch()
                .then(function (collection) {
                    res.json({error: false, data: collection.toJSON()});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        });
};