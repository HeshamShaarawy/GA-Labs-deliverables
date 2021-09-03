const Ticket = require("../models/ticket")

// to display the form to create a new ticket
function newTicket(req, res) { 
    res.render('tickets/new', { flightId: req.params.id });
}

// to save the data received form to create a new ticket into the database
function create (req, res){
   const flightId = req.params.id;
   const ticket = new Ticket(req.body);
   ticket.flight = flightId;
   ticket.save(function(err){
        res.redirect(`/flights/${flightId}`);  
    })  
};

// to delete a ticket 
function deleteTicket (req, res) {
    Ticket.findOneAndDelete(req.params.ticketId, function (err, ticket){
        res.redirect(`/flights/${req.params.flightId}`); 
    });
};

module.exports = {
    new: newTicket,
    create,
    deleteTicket
}