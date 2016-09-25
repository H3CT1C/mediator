function createTickets(app, ticket) {
    return new Promise((resolve, reject) => {
        var tickets = new app.api.tickets.model();
        tickets.ticketNumber = ticket.ticketNumber;
        tickets.origin = ticket.origin;
        tickets.destination = ticket.destination;
        tickets.departDate = ticket.departDate;
        tickets.returnDate = ticket.returnDate;
        tickets.isAvailable = ticket.isAvailable;


        tickets.save(function(err) {
            if (err) {
                console.log(err);
                return reject(err);
            }
            console.log("tickets created", tickets.ticketNumber);
            return resolve(tickets);
        });
    });

};

module.exports = function(app) {
    return new Promise((resolve, reject) => {
        app.api.tickets.model.find({}).remove(function() {

            var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
            var request = require('request');

            var parsedJSON = require('./data/tickets.json');
            var passengers = parsedJSON;
            var passenger = [];
            var promises = [];

            passengers.forEach(function(ticket, index, array) {
                promises.push(createTickets(app, ticket));
            });
            Promise.all(promises).then(function(response) {
                return resolve(response);
            }, function(err) {
                return reject(err);
            });

        });

    });
};
