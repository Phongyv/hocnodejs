const express = require('express');
const router = express.Router();

// route init
router.get('/', (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
   })

module.exports = router;
