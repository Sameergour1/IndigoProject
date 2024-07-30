const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    flightNumber: { type: String, required: true },
    ticketNumber: { type: String, required: true },
    seats: { type: Number, required: true },
    users: { type: Number, required: true },
    date: { type: Date, required: true }
});

module.exports = mongoose.model('Flight', flightSchema);
