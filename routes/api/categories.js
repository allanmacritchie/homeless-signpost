const Bookshelf = require('../../lib/bookshelf');

const Category = require('../../models').Category;
const Categories = require('../../collections').Categories;

module.exports = function(router) {
    router.route('/api/categories')
    // fetch all books
        .get(function (req, res) {
            Categories.forge()
                .fetch()
                .then(function (collection) {
                    res.json({error: false, data: collection.toJSON()});
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        })
};