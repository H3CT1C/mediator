module.exports = function(app) {
    var mongoose = require('mongoose');

    // Schema
    var schema = new mongoose.Schema({
        uuid: String,
        type: String,
        created: Number,
        modified: Number,
        confNumber: String,
        freqFlierNumber: String,
        lastBookingData: Date,
        passengerName: String,
        ticketNumber: String,
        totalBookingsToDate: Number,
        isAvailable: Boolean
    });


    // Model
    var model = mongoose.model('corppassengers', schema);
    return model;
};
