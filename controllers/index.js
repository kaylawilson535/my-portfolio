const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})
router.get('/endofexile', (req, res) => {
    res.render('end-of-exile')
})
router.get('/instructar', (req, res) => {
    res.render('instructAR')
})
router.get('/tpfrenzy', (req, res) => {
    res.render('tp-frenzy')
})
router.get('/3dmodels', (req, res) => {
    res.render('3d-models')
})
router.get('/uidesigns', (req, res) => {
    res.render('ui-designs')
})


module.exports = router