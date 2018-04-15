const Bookshelf = require('../lib/bookshelf');

const Asset =  Bookshelf.Model.extend({
    tableName: 'assets',
    hasTimestamps: true,

    service: function() {
        return this.belongsTo('Service');
    }
});

module.exports = Bookshelf.model('Asset', Asset);
