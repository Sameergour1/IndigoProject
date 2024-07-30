const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight'); // Import the Flight model
const FlightBooking = require('../models/FlightBooking'); // Import the FlightBooking model

// Update flight details
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { flightNumber, ticketNumber, seats, users, date } = req.body;

        // Find the flight by ID and update
        const updatedFlight = await Flight.findByIdAndUpdate(id, {
            flightNumber,
            ticketNumber,
            seats,
            users,
            date
        }, { new: true });

        if (!updatedFlight) {
            return res.status(404).json({ message: 'Flight not found' });
        }

        res.json(updatedFlight);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Handle flight cancellation
router.post('/cancel', async (req, res) => {
    try {
        const { flightNumber, ticketNumber, reason } = req.body;

        // Find the flight by flightNumber and ticketNumber
        const flight = await Flight.findOne({ flightNumber, ticketNumber });

        if (!flight) {
            return res.status(404).json({ message: 'Flight or ticket not found' });
        }

        // Optionally, you might want to delete the flight or mark it as cancelled
        // flight.cancelled = true; // Example field to indicate cancellation
        // await flight.save();

        res.json({ message: 'Cancellation successful', reason });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Handle flight booking submissions
router.post('/book', async (req, res) => {
    const { flightNumber, ticketNumber, seats, users, date, price } = req.body;

    try {
        const newBooking = new FlightBooking({
            flightNumber,
            ticketNumber,
            seats,
            users,
            date,
            price
        });

        await newBooking.save();
        res.status(201).json({ message: 'Flight booked successfully', booking: newBooking });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
