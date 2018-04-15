const Bookshelf = require('../lib/bookshelf');
const Service = require('.').Service;

const ServiceHours = Bookshelf.Model.extend({
    tableName: 'servicehours',
    hasTimestamps: true,

    service: function () {
        return this.belongsTo('Service');
    }
});

module.exports = Bookshelf.model('ServiceHours', ServiceHours);