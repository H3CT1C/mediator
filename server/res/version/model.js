module.exports = function(app) {
    var mongoose = require('mongoose');

    // Schema
    var schema = new mongoose.Schema({
        version: {
            type: String
        },
        created: {
            type: Date,
            default: Date.now
        }
    });


    // Model
    var model = mongoose.model('Version', schema);
    return model;
};
