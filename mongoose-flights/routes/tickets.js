var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets')


router.get('/:id/tickets/new', ticketsCtrl.new);
router.post('/:id/tickets', ticketsCtrl.create)
router.get('/:flightId/tickets/:ticketId', ticketsCtrl.deleteTicket);

module.exports = router