const config = require('../config');
const _ = require('lodash');

module.exports = _.merge({
    port: 8000,
    db: 'my-books',
    db_user: 'abcD',
    db_pass: 'shh!',
    secret: 'ThisIsMySecretKey'
}, config);