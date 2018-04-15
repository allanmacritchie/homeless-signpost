const csv2array = require('../util/csv2array');

const table_name = 'assets';

exports.seed = function (knex, Promise) {
    let path = csv2array.find(table_name);

    if(path==null) return null;

    // Deletes ALL existing entries
    return knex(table_name).del()
        .then(function () {
            const data = csv2array.import(path);
            // Inserts seed entries
            return knex(table_name).insert(data);
        });
};