const Bookshelf = require('../lib/bookshelf');

const User = Bookshelf.Model.extend({
    tableName: 'users',
});

module.exports = Bookshelf.model('User', User);