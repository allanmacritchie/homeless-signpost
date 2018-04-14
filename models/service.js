const Bookshelf = require('../lib/bookshelf');

const Service =  Bookshelf.Model.extend({
    tableName: 'services',
    hasTimestamps: true,

    servicehours: function() {
        return this.belongsToMany('ServiceHours');
    },
    category: function() {
        return this.belongsTo('Category');
    }
});

module.exports = Bookshelf.model('Service', Service);
