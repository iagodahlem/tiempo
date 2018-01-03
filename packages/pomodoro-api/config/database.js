module.exports = {
  development: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
  },
  test: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
  },
  production: {
    env: 'DATABASE_URL',
    dialect: 'postgres',
    operatorsAliases: false,
    logging: false,
  },
}
