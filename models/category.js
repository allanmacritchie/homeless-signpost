const Bookshelf = require('../lib/bookshelf');

const Category = Bookshelf.Model.extend({
    tableName: 'categories',

    services: function () {
        return this.hasMany('Service');
    }
});

module.exports = Bookshelf.model('Category', Category);