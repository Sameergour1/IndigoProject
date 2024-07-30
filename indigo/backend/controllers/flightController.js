const Flight = require('../models/FlightBooking');

const addFlight = async (req, res) => {
    const { flightNumber, ticketNumber, seats, users, date } = req.body;

    try {
        const newFlight = new Flight({ flightNumber, ticketNumber, seats, users, date });
        await newFlight.save();
        res.status(201).json({ message: 'Flight added' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getFlights = async (req, res) => {
    try {
        const flights = await Flight.find();
        res.json(flights);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { addFlight, getFlights };
