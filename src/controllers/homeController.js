const connection = require('../config/database')

const getHomepage = (req,res)=>{
   //database
    // connection.query(
    //   'select * from Users u',
    //   function(err,results,fields){
    //     console.log('log results:',results)
    //     res.send(JSON.stringify(results))
    //   }
    // )
    return res.render('home.ejs')
}
const postCreateUser = (req,res)=>{
let email =req.body.email;
let name = req.body.myname;
let city =req.body.city;
console.log(email,name,city)
connection.query(
  `INSERT INTO
  Users (email,name,city)
    VALUE(?,?,?)`,
    [email,name,city],()=>{
      res.send('create user success')
    }
)
}
const getCreatePage = (req,res)=>{
  return res.render('create.ejs')
}
module.exports = {
    getHomepage,postCreateUser,getCreatePage
};
    
