module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  User.associate = (models) => {
    models.User.hasMany(models.Entry)
    models.User.hasMany(models.Session)
    models.User.hasMany(models.Setting)
  }

  return User
}
