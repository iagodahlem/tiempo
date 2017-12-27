module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Globals', [
      { key: 'maxSessions', value: '6' },
    ], {})
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Globals', null, {})
  },
}
