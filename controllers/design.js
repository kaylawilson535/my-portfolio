const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.render('designs/design')
})

module.exports = router