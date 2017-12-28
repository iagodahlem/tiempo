module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    duration: DataTypes.BIGINT,
  })

  Type.associate = (models) => {
    models.Type.hasMany(models.Entry)
    models.Type.hasMany(models.Session)
  }

  return Type
}
