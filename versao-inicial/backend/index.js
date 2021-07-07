const app = require('express')()
const consign = require('consign')

consign()
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => {
    console.log('Execulting...')
})

// knex init
// _table_users
// _table_categories
// _table_articles
