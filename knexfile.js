const config=require('./lib/config');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: config.db+".sqlite"
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: config.db,
      user:     config.db_user,
      password: config.db_pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
        database: config.db,
        user:     config.db_user,
        password: config.db_pass
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
