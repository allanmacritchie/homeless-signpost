const knex = require('knex');
const moment = require('moment');

const csv2array = require('../util/csv2array');

const transformer = require('knex-csv-transformer').transformer;
const transfomerHeader = require('knex-csv-transformer').transfomerHeader;

exports.seed = transformer.seed({
    table: 'services',
    file: csv2array.find('services'),
    transformers: [
        transfomerHeader('Service Name', 'name'),
        transfomerHeader('Address 1', 'address1'),
        transfomerHeader('Address 2', 'address2'),
        transfomerHeader('Address 3', 'address3'),
        transfomerHeader('TownCity', 'city'),
        transfomerHeader('Postcode', 'postcode'),
        transfomerHeader('Category', 'category_id'),
        transfomerHeader('Organisation', 'organisation'),
        transfomerHeader('Service Description', 'description'),
        transfomerHeader('Map Link', 'map'),
        transfomerHeader('Website URL', 'website'),
        transfomerHeader('Contact Number', 'telephone'),
        transfomerHeader('null', 'geox', function(value, data) {
            if(data[12]) {
                let geox = data[12].split('@')[1];
                if(geox) {

                    return geox.split(',')[1];
                }
            }
            return '';
        }),
        transfomerHeader('null', 'geoy', function(value, data) {
            if(data[12]) {
                let geoy = data[12].split('@')[1];
                if(geoy) {
                    return geoy.split(',')[0];
                }
            }
            return '';
        })
        // transfomerHeader('Date', 'time', function(value) {
        //     return new moment(value, "DD/MM/YYYY").format('YYYY-MM-DDT00:00:00');
        // })
    ]
});