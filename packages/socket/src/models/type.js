module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    label: DataTypes.STRING,
    duration: DataTypes.BIGINT,
  })

  Type.associate = (models) => {
    models.Type.hasMany(models.Entry, {
      foreignKey: 'typeId',
    })

    models.Type.hasMany(models.Session, {
      foreignKey: 'typeId',
    })
  }

  return Type
}
