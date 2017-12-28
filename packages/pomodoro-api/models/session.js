module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    done: DataTypes.BOOLEAN,
  })

  Session.associate = (models) => {
    models.Entry.belongsTo(models.Type, {
      onDelete: 'CASCADE',
      foreignKey: 'typeId',
    })

    models.Entry.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    })
  }

  return Session
}
