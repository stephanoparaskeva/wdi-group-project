const { dbURI, port } = require('./config/environment')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const errHandler = require('./lib/errorHandler')

const app = express()

const router = require('./config/routes')

mongoose.connect(dbURI, { useNewUrlParser: true })

app.use(bodyParser.json())

app.use('/api', router)

app.use(errHandler)

app.listen(port, () => console.log(`App is listening on port ${port}`))
