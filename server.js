if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  console.log('requiring dotenv for dev')
}

const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const server = express()

// Middleware Plugins
server.use(bodyParser.json())

// Routes
server.use('/', [
  require('./routes/sms')
])

// Start the server
server.listen(7000, error => {
  if (error) console.error('Error starting', error)
  else console.log('Started at http://localhost:7000')
})