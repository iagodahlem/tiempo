module.exports = (sequelize, DataTypes) => {
  const Entry = sequelize.define('Entry', {
    start: DataTypes.INTEGER,
    end: DataTypes.INTEGER,
    running: DataTypes.BOOLEAN,
  })

  Entry.associate = (models) => {
    models.Entry.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    })

    models.Entry.belongsTo(models.Type, {
      onDelete: 'CASCADE',
      foreignKey: { allowNull: false },
    })
  }

  return Entry
}
