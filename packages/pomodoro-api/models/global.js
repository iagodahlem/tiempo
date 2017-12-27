module.exports = (sequelize, DataTypes) => {
  const Global = sequelize.define('Global', {
    key: DataTypes.STRING,
    value: DataTypes.STRING,
  })

  return Global
}
