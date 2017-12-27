const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const database = require('../config/database')

const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = database[env]
const db = {}

const sequelize = config.env
  ? new Sequelize(process.env[config.env], config)
  : new Sequelize(config.database, config.username, config.password, config)

const isModelFile = (file) => (file.indexOf('.') !== 0)
  && (file !== basename)
  && (!file.includes('test'))
  && (file.slice(-3) === '.js')

const importModel = (file) => {
  const model = sequelize['import'](path.join(__dirname, file))
  db[model.name] = model
}

const associateModel = (model) => {
  if (!db[model].associate) {
    return
  }

  db[model].associate(db)
}

fs
  .readdirSync(__dirname)
  .filter(isModelFile)
  .forEach(importModel)

Object.keys(db)
  .forEach(associateModel)

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
