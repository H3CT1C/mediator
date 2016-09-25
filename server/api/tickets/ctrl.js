module.exports = function(app) {
    var request = require('request');
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    //var corppassenger = app.api.corppassengers.model;

    app.get('/api/tickets', function(req, res) {
        app.api.tickets.model.find(function(err, tickets) {
            if (err) {
                return console.log(err);
            }
            res.json(tickets);
        });
    });

    app.put('/api/tickets/:ticketNumber', function(req, res) {
        console.log(req.params.ticketNumber)
        app.api.tickets.model.findOne({ticketNumber: req.params.ticketNumber}, function(err, ticket) {
            if (err) {
                res.send('There was an error processing the ticketNumber');
            } else {
                res.json(ticket);
            }
        });
    });

    //the id will be equal to the uuid of the passengers boarding info
    //this will be used when the person decides to list their current ticket as
    //available
    app.put('/api/tickets/:ticketNumber', function(req, res) {
        console.log(req.params.ticketNumber)
        app.api.tickets.model.findOne({ticketNumber: req.params.ticketNumber}, function(err, ticket) {
            if (err) {
                res.send('There was an error processing the ticketNumber');
            } else {
                ticket.isAvailable = !ticket.isAvailable;
                console.log('putting: ', ticket)
                ticket.save();
                res.json(ticket);
            }
        });
    });

};
