const config = require('../lib/config');
const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: config.db+".sqlite"
    }
});

module.exports = knex;
