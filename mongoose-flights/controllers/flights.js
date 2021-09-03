const Flight = require('../models/flight')
const Ticket = require('../models/ticket');

// pulling all flights data then sorting them based on departure date then sending the data to index page for display:
function showAll(req,res){   
    Flight.find(function(err, flights){
        const sortFlights = flights.slice().sort((a, b) => a.departs - b.departs);
        if(err) return console.log(err)
        res.render('flights/index', {sortFlights})
    })
}

//rendering the form page for user to create a new flight
function newFlights(req,res){
    res.render('flights/new');
}

// handling the data received for a new flight and saving it in the database 
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

// handling request to show the details of of a flight: pulling the flight data from DB and sending it to view of flight details
function flightDetails(req,res) {
    Flight.findById(req.params.id, function(err,flight){
        const destinations = flight.destinations.slice().sort((a, b) => a.arrival - b.arrival);
        const tickets = Ticket.find({ flight: flight._id }, function (err, tickets){
            res.render('flights/details', { flight, destinations, tickets });
        });
    });        
}

//adding a destination to a flight: through handling the data received from the form at view : flights/detail 
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