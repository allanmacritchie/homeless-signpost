const Bookshelf = require('../lib/bookshelf');

const Category = require('../models').Category;
const Categories = require('../collections').Categories;

const _ = require('lodash');

module.exports = function(router) {
    router.route('/categories')
    // fetch all Categories
        .get(function (req, res) {
                Categories.forge().fetch()
                    .then(function (Categories) {
                        Categories = Categories.toJSON();
                        res.render('Categories', {
                            categories: Categories
                        });
                    })
                    .catch(function (err) {
                        res.status(500).json({error: true, data: {message: err.message}});
                    });
            });

};