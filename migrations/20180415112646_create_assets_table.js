
exports.up = function(knex, Promise) {
    return knex.schema.createTable('assets', function(table) {
        table.increments('id').primary();
        table.integer('service_id').notNullable();
        table.string('name').nullable();
        table.string('type').nullable();
        table.string('uri').nullable();
        table.timestamps();
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('assets')
};
