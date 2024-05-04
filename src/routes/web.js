const express = require('express');
const router = express.Router();
const {getHomepage} = require('../controllers/homeController.js')

// route init
router.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
   })

router.get('/a',getHomepage)   

module.exports = router;
