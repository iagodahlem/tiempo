module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  })

  Type.associate = (models) => {
    models.Type.hasMany(models.Entry)
  }

  return Type
}
