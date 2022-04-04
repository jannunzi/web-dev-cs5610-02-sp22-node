const mongoose = require('mongoose');
const tuitsSchema = require('./tuits-schema');
const tuitsModel = mongoose.model(
  "TuitsModel", tuitsSchema);
module.exports = tuitsModel;