module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define('Session', {
    done: DataTypes.BOOLEAN,
  })

  Session.associate = (models) => {
    models.Session.belongsTo(models.Entry, {
      foreignKey: 'entryId',
      onDelete: 'CASCADE',
    })
  }

  return Session
}
