exports.up = function(knex, Promise) {
    return knex.schema.createTable('organisations', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('organisations')
};
