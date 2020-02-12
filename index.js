// require('dotenv').config({path: __dirname + '.env'})
require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./products_controller')

const app = express()

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING).then(dbObj => {
    app.set('db', dbObj)
    // console.log(dbObj)
}).catch(err => console.log(err))

app.use(express.json())

app.get('/api/products', ctrl.getAll)
app.get('/api/products/:id', ctrl.getOne)
app.put('/api/products/:id', ctrl.update)
app.post('/api/products', ctrl.create)
app.delete('/api/products/:id', ctrl.delete)

app.listen(SERVER_PORT, () => console.log(`Server running on port: ${SERVER_PORT}`))
