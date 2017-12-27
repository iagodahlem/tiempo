module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    done: DataTypes.BOOLEAN,
  })

  Session.associate = (models) => {
    models.Session.belongsTo(models.Type, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    })

    models.Session.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    })
  }

  return Session
}
