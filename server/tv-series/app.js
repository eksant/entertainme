require('dotenv').config()
const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const mongoose      = require('mongoose')

const app = express()

mongoose.connection.openUri('mongodb://localhost:27017/entertainme-tvseries')
mongoose.Promise = global.Promise
mongoose.connection.once('open', () => {
  console.log('mongoose-tv-series connection success')
}).on('error', (error) => {
  console.error('connection error', error)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/tvseries', require('./routes/tvseries'))

module.exports = app
