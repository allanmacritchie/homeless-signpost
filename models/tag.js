const Bookshelf = require('../lib/bookshelf');

const Tag = Bookshelf.Model.extend({
    tableName: 'tags',

    tags: function () {
        return this.belongsToMany('Services');
    }
});

module.exports = Bookshelf.model('Tag', Tag);