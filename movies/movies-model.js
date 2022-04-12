const mongoose = require('mongoose')
const moviesSchema = require('./movies-schema')
const moviesModel = mongoose.model(
  'MoivesModel',
  moviesSchema
)
module.exports = moviesModel