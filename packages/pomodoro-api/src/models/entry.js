module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    start: DataTypes.BIGINT,
    end: DataTypes.BIGINT,
    running: DataTypes.BOOLEAN,
  })

  Entry.associate = (models) => {
    models.Entry.belongsTo(models.Type, {
      foreignKey: 'typeId',
      onDelete: 'CASCADE',
    })

    models.Entry.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  }

  return Entry
}
