const { Router } = require('express')
const { getSampleNames } = require('../controllers/getSampleData')

const indexRouter = Router()

indexRouter.get('/names', getSampleNames)

module.exports = indexRouter