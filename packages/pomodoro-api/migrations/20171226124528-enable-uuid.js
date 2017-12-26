export default {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize
      .query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
  },

  down(queryInterface, Sequelize) {},
}
