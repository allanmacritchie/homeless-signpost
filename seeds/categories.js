const knex = require('knex');
const moment = require('moment');

const csv2array = require('../util/csv2array');

const transformer = require('knex-csv-transformer').transformer;
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;

exports.seed = transformer.seed({
    table: 'categories',
    file: csv2array.find('categories'),
    transformers: [
        transfomerHeader('Category', 'name')
        // transfomerHeader('Date', 'time', function(value) {
        //     return new moment(value, "DD/MM/YYYY").format('YYYY-MM-DDT00:00:00');
        // })
    ]
});