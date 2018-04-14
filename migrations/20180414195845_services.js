
exports.up = function(knex, Promise) {
    return knex.schema.createTable('services', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('address1').nullable();
        table.string('address2').nullable();
        table.string('address3').nullable();
        table.string('city').nullable();
        table.string('postcode').nullable();
        table.string('description').nullable();
        table.string('geox').nullable();
        table.string('geoy').nullable();
        table.string('map').nullable();
        table.string('contact').nullable();
        table.string('telephone').nullable();
        table.string('website').nullable();
        table.string('review').nullable();
        table.string('owner').nullable();
        table.datetime('verified_at').nullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('services')
};
