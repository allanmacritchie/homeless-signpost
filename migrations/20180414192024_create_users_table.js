exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('auth').notNullable();
        table.timestamps();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};
