module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable('Sessions', {
      id: {
        unique: true,
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      done: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      typeId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Types', key: 'id' },
        type: Sequelize.UUID,
      },
      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        references: { model: 'Users', key: 'id' },
        type: Sequelize.UUID,
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
    return queryInterface.dropTable('Sessions')
  },
}
