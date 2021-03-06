const mongoose  = require('mongoose')
const Schema    = mongoose.Schema

var tvseriesSchema = new Schema({
  title: {
    type: String,
  },
  overview: {
    type: String
  },
  poster_path: {
    type: String
  },
  popularity: {
    type: Number
  },
  tag: {
    type: String
  },
  status: {
    type: Number
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('tv-series', tvseriesSchema)