module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin',
        createdAt: Sequelize.literal('now()'),
        updatedAt: Sequelize.literal('now()'),
      },
    ], {})
  },

  down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
