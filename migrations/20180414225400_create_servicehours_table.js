
exports.up = function(knex, Promise) {
    return knex.schema.createTable('servicehours', function(table) {
        table.increments('id').primary();
        table.integer('service_id').notNullable();
        table.time('open').nullable();
        table.time('close').nullable();
        table.string('day').nullable();
        table.timestamps();
    })
};


exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('servicehours')
};
