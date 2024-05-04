const express = require('express')
const path = require('path')

//import env file
require('dotenv').config()

const app = express()
const port = process.env.PORT //use env variable

//config router view engine & static file
const configViewEngine = require('./config/viewEngine');
 configViewEngine(app);

//routes
const webRoutes = require('./routes/web.js');
app.use('/', webRoutes);

//database
const connection=require('./config/database.js')
connection.query(
  'select * from Users u',
  function(err,results,fields){
    console.log('log results:',results)
  }
)

//listen port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})