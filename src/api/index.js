const express = require('express')
const indexRouter = require('./routes/indexRouter')
const api = express()

api.use('/index', indexRouter)

module.exports = api