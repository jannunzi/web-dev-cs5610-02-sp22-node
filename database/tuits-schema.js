const mongoose = require('mongoose');
const tuitsSchema = mongoose.Schema({
  tuit: String,
  likes: {type: Number, default: 0}
}, {collection: 'tuits'});
module.exports = tuitsSchema;