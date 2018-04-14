const Bookshelf = require('../lib/bookshelf');

const Category = Bookshelf.Model.extend({
    tableName: 'categories',

    categories: function () {
        return this.hasMany('Service', 'category_id');
    }
});

module.exports = Bookshelf.model('Category', Category);