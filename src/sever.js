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

//mysql
const mysql = require('mysql2')
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database:process.env.DB_NAME
})
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