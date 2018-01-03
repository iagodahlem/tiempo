module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    done: DataTypes.BOOLEAN,
  })

  Session.associate = (models) => {
    models.Entry.belongsTo(models.Type, {
      foreignKey: 'typeId',
      onDelete: 'CASCADE',
    })

    models.Entry.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  }

  return Session
}
