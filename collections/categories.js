const Bookshelf = require('../lib/bookshelf');

const Categories = require('../models').Category;

module.exports = Bookshelf.Collection.extend({
    model: Categories
});