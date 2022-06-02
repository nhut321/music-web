require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const routes = require('./routes') 

routes(app) 



app.listen(port, console.log('server connected at port: ' + port))