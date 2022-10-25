const express = require('express')
const cors = require('cors')

const configDb = require('./config/configDb')
const routes = require('./config/routes')

const app = express()
const port = 3050

app.use(express.json())
app.use(cors())
app.use(routes)

configDb()

app.listen(port,()=>{
    console.log('listening on',port)
})