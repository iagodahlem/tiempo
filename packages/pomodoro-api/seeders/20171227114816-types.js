const times = require('../constants/times')

module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Types', [
      { name: 'Short Break', duration: times.FIVE_MINUTES },
      { name: 'Long Break', duration: times.FIFTEEN_MINUTES },
      { name: 'Pomodoro', duration: times.TWENTY_FIVE_MINUTES },
    ], {})
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Types', null, {})
  },
}
