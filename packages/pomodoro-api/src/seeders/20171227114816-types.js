const times = require('../constants/times')

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      {
        name: 'Short Break',
        label: 'short-break',
        duration: times.FIVE_MINUTES,
        createdAt: Sequelize.literal('now()'),
        updatedAt: Sequelize.literal('now()'),
      },
      {
        name: 'Long Break',
        label: 'long-break',
        duration: times.FIFTEEN_MINUTES,
        createdAt: Sequelize.literal('now()'),
        updatedAt: Sequelize.literal('now()'),
      },
      {
        name: 'Pomodoro',
        label: 'pomodoro',
        duration: times.TWENTY_FIVE_MINUTES,
        createdAt: Sequelize.literal('now()'),
        updatedAt: Sequelize.literal('now()'),
      },
    ], {})
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, {})
  },
}
