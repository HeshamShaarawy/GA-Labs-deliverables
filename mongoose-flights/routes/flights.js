var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

router.get('/', flightsCtrl.showAll)
router.get('/new', flightsCtrl.new)
router.get('/:id', flightsCtrl.flightDetails)
router.post('/', flightsCtrl.create)
router.post('/:id', flightsCtrl.addDest)


module.exports = router