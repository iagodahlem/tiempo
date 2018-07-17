module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Globals', [
      {
        key: 'maxSessions',
        value: '6',
        createdAt: Sequelize.literal('now()'),
        updatedAt: Sequelize.literal('now()'),
      },
    ], {})
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Globals', null, {})
  },
}
