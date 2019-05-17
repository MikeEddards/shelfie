require('dotenv').config()
const express = require('express')
const massive = require('massive')
const controller = require('./controller')

const app = express()


const { SERVER_PORT, CONNECTION_STRING } = process.env

massive(CONNECTION_STRING)
  .then(db => {
    app.set("db", db)
    console.log('db set to go')
  })
  .catch(err => console.log(err))

app.use(express.json())

app.get('/api/allproducts', controller.getAll)
app.get('/api/product/:id', controller.returnOne)
app.post('/api/allproducts', controller.add)
app.delete('/api/allproducts/:id', controller.delete)
app.put('/api/update/:id', controller.change)



app.listen(SERVER_PORT, () => console.log(`Doing all the things on ${SERVER_PORT}`))