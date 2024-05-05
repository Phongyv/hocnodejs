const express = require('express')
const path = require('path')

//import env file
require('dotenv').config()

const app = express()
const port = process.env.PORT //use env variable

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//config router view engine & static file
const configViewEngine = require('./config/viewEngine');
 configViewEngine(app);

//routes
const webRoutes = require('./routes/web.js');
app.use('/', webRoutes);


//listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})