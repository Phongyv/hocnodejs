const express = require('express')
const path = require('path')
//import env file
require('dotenv').config()

const app = express()
const port = process.env.PORT //use env variable

//config router view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

//config static file
app.use(express.static(path.join(__dirname ,'public')))

// route init
app.get('/', (req, res) => {
 // res.send('Hello World!')
 res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})