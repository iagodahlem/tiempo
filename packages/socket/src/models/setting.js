module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define('Setting', {
    key: DataTypes.STRING,
    value: DataTypes.STRING,
  })

  Setting.associate = (models) => {
    models.Setting.belongsTo(models.User, {
      onDelete: 'CASCADE',
      foreignKey: 'userId',
    })
  }

  return Setting
}
