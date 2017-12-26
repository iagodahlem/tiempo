export default (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING,
    duration: DataTypes.INTEGER,
  })

  return Type
}
