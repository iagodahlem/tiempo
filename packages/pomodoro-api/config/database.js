module.exports = {
  development: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
    operatorsAliases: false,
  },
  test: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
    operatorsAliases: false,
  },
  production: {
    'use_env_variable': 'DATABASE_URL',
    dialect: 'postgres',
    seederStorage: 'sequelize',
    logging: false,
    operatorsAliases: false,
    dialectOptions: {
      ssl: true,
    },
  },
}
