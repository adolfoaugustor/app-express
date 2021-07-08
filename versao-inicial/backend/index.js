const app = require('express')()
const consign = require('consign')
const mongoose = require('mongoose')

require('./config/mongodb.js')

app.mongoose = mongoose

consign()
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Execulting...')
})
