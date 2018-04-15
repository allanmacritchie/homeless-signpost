const Bookshelf = require('../lib/bookshelf');

const Service = require('../models').Service;

module.exports = Bookshelf.Collection.extend({
    model: Service
});