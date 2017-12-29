module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  })

  User.associate = (models) => {
    models.User.hasMany(models.Entry, {
      // as: 'user',
      foreignKey: 'userId',
    })

    models.User.hasMany(models.Session, {
      // as: 'user',
      foreignKey: 'userId',
    })

    models.User.hasMany(models.Setting, {
      // as: 'user',
      foreignKey: 'userId',
    })
  }

  return User
}
