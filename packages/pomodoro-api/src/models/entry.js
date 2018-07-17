module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    start: DataTypes.BIGINT,
    update: DataTypes.BIGINT,
    runned: DataTypes.BIGINT,
    end: DataTypes.BIGINT,
    running: DataTypes.BOOLEAN,
    paused: DataTypes.BOOLEAN,
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

    models.Entry.hasMany(models.Session, {
      foreignKey: 'entryId',
    })
  }

  return Entry
}
