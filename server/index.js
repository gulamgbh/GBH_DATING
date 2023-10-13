const express = require('express')
var bodyParser = require('body-parser')
const cors = require('cors')
require('./db/conn');
const app = express()
require('dotenv').config()
app.use(express.json());
app.use(cors())
app.use(bodyParser.json())



//Customer/User related Routes---------------------------
const clientRoutes = require('./view/clientRoute/authRoute')
app.use('/api/v1', clientRoutes)
//-------------------------------------
app.use('/', (req, res) => {
  res.status(200).send("<h1>Home page</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})