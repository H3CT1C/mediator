module.exports = function(app) {
    var request = require('request');
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    var salt = "$2a$10$0D9EdeLzhglYlLebNboIRu";


    app.get('/api/corppassengers', function(req, res) {
        app.api.corppassengers.model.find(function(err, passengers) {
            if (err) {
                return console.log(err);
            }
            res.json(passengers);
        });
    });

    app.get('/api/corppassengers/:uuid', function(req, res) {
        app.api.corppassengers.model.findOne({
            uuid: req.params.uuid
        }, function(err, passenger) {
            console.log('putting: ', passenger)
            if (err) {
                res.send('There was an error processing the passenger uuid');
            } else {
                res.json(passenger);
            }
        });
    });

    app.put('/api/corppassengers/:uuid', function(req, res) {
        app.api.corppassengers.model.findOne({
            uuid: req.params.uuid
        }, function(err, passenger) {
            console.log('putting: ', passenger)
            if (err) {
                res.send('There was an error processing the passenger uuid');
            } else {
                console.log(req.body)
                passenger.passengerName = req.body.passengerName;
                res.json(passenger);
            }
        });
    });
};
