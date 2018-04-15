const Bookshelf = require('../lib/bookshelf');

const Category = require('../models').Category;
const Categories = require('../collections').Categories;

const _ = require('lodash');

module.exports = function(router) {

    router.route('/category')
    // fetch all categories
        .get(function (req, res) {
                res.redirect('/categories');
            });

    router.route('/category/:id')
    // fetch all categories
        .get(function (req, res) {
            Category
                .query('where', 'id', '=', req.params.id)
                .fetch()
                .then(function (category) {
                    category = category.toJSON();
                    console.log(category);
                    res.render('category', {
                        category: category
                    });
                })
                .catch(function (err) {
                    res.status(500).json({error: true, data: {message: err.message}});
                });
        });
};