const Bookshelf = require('../lib/bookshelf');

const Service =  Bookshelf.Model.extend({
    tableName: 'services',
    hasTimestamps: true,

    servicehours: function() {
        return this.belongsToMany('ServiceHours');
    }
});

module.exports = Bookshelf.model('Service', Service);
