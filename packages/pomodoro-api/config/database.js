export default {
  development: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-dev',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'pomodoro',
    password: null,
    database: 'pomodoro-test',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    dialect: 'postgres',
  },
}
