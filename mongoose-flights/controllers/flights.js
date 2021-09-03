const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

function showAll(req,res){   
    Flight.find(function(err, flights){
        const sortFlights = flights.slice().sort((a, b) => a.departs - b.departs);
        res.render('flights/index', {sortFlights})
    
    })
}

async function newFlights(req,res){
    const newFlight = new Flight();
    const dt = newFlight.departs;
    // Format the date for the value attribute of the input
    const departsDate = dt // .toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
}


function create(req, res) {
    const newflight = new Flight(req.body);
    
    newflight.save(function(err) {
      // one way to handle errors
      if (err) return res.render('flights/new');
      console.log(newflight);
      // for now, redirect right back to new.ejs
      res.redirect('/flights');
    });
};

function flightDetails(req,res) {
    Flight.findById(req.params.id, function(err,flight){
                const destinations = flight.destinations.slice().sort((a, b) => a.arrival - b.arrival);
                const tickets = Ticket.find({ flight: flight._id }, function (err, tickets){
                    res.render('flights/details', { flight, destinations, tickets });
            });
        });        
}

async function addDest(req,res){
    let flight = await Flight.findById(req.params.id)

    flight.destinations.push({
        airport: req.body.airport,
        arrival:  req.body.arrival
    })
   
    await flight.save()
    res.redirect(`/flights/${flight.id}`)
}



   

module.exports = {
    showAll,
    new:newFlights,
    create,
    flightDetails,
    addDest  
}