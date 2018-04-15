const Bookshelf = require('../lib/bookshelf');

const Category = require('../models').Category;

module.exports = Bookshelf.Collection.extend({
    model: Category
});