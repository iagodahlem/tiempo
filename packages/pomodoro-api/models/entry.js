module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    start: DataTypes.BIGINT,
    end: DataTypes.BIGINT,
    running: DataTypes.BOOLEAN,
  })

  Entry.associate = (models) => {
    models.Entry.belongsTo(models.Type, {
      onDelete: 'CASCADE',
      foreignKey: 'typeId',
    })

    models.Entry.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    })
  }

  return Entry
}
