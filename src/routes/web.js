const express = require('express');
const router = express.Router();
const {getHomepage,postCreateUser,getCreatePage} = require('../controllers/homeController.js')

// route init
router.get('/sample', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
   })

router.get('/',getHomepage)   
router.get('/create',getCreatePage)
router.post('/create-user',postCreateUser)
module.exports = router;
