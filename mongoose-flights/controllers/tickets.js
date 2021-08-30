const Ticket = require("../models/ticket")

function newTicket(req, res) {
   
    res.render('tickets/new', { flightId: req.params.id });
}


function create (req, res){
   const flightId = req.params.id;
   const ticket = new Ticket(req.body);
   ticket.flight = flightId;
   ticket.save(function(err){
        res.redirect(`/flights/${flightId}`);  
    })  
};

function deleteTicket (req, res) {
    console.log(" shark and 2 fishes")
    Ticket.findOneAndDelete(req.params.ticketId, function (err, ticket){
        res.redirect(`/flights/${req.params.flightId}`); 
    });
};

module.exports = {
    new: newTicket,
    create,
    deleteTicket
}