const mongoose = require('mongoose')
const moviesSchema = mongoose.Schema({
  title: String,
  imdbID: {type: String, unique: true},
  poster: String,
  likes: {type: Number, default: 0},
  disliked: {type: Number, default: 0}
}, {collection: 'movies'})
module.exports = moviesSchema