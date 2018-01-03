module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  User.associate = (models) => {
    models.User.hasMany(models.Entry, {
      foreignKey: 'userId',
    })

    models.User.hasMany(models.Session, {
      foreignKey: 'userId',
    })

    models.User.hasMany(models.Setting, {
      foreignKey: 'userId',
    })
  }

  return User
}
