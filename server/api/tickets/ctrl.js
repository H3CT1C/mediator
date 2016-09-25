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


    //the id will be equal to the uuid of the passengers boarding info
    //this will be used when the person decides to list their current ticket as
    //available
    app.put('/api/corppassengers/:ticketNuber', function(req, res) {
        console.log("testing")
        app.api.corppassengers.model.findOne(req.params.ticketNumber, function(err, passenger) {
            console.log('putting: ', passenger)
            if (err) {
                res.send('There was an error processing the tasks');
            } else {
                todo.read = true;
                todo.save();
                res.send('read');
            }
        });
        res.status(200);
    });

};
