module.exports = function(app) {
    var mongoose = require('mongoose');

    // Schema
    var schema = new mongoose.Schema({
        ticketNumber: String,
        origin: String,
        destination: String,
        departDate: String,
        returnDate: String,
        isAvailable: Boolean
    });

    // Model
    var model = mongoose.model('tickets', schema);
    return model;
};
