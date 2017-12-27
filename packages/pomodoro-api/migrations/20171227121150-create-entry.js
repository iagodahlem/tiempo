module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Entries', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      start: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      end: {
        type: Sequelize.INTEGER,
      },
      running: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('now()'),
      },
    })
  },

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('Entries')
  }
}
