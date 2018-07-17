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
        type: Sequelize.BIGINT,
      },
      update: {
        type: Sequelize.BIGINT,
      },
      runned: {
        type: Sequelize.BIGINT,
      },
      end: {
        type: Sequelize.BIGINT,
      },
      running: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      paused: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      typeId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Types',
          key: 'id',
          as: 'typeId',
        },
      },
      userId: {
        allowNull: false,
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
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
  },
}
