var request = require('request');

function createCorpPassenger(app, uuid, type, created, modified, confNumber,
    freqFlierNumber, lastBookingData, passengerName,
    ticketNumber, totalBookingsToDate) {
    var corppassenger = app.api.corppassengers.model;


}

module.exports = function(app) {
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    return new Promise(resolve, reject) => {
        app.api.corppassengers.model.find({}).remove(function() {
            var passengers = [];
            request('http://demo30-test.apigee.net/v1/hack/corporate/passengers?apikey=' + apiKey,
                function(error, response, body) {
                    passengers = body.entities; //this might need to be response.body
                });
            passengers.forEach((index, item) => {
              createCorpPassenger();
            });
            var promises = []
        })
    }

    app.get('/api/corppassengers', function(req, res) {
        var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';

        console.log('wtf😳', Math.floor(Date.now() / 1000));

        request('http://demo30-test.apigee.net/v1/hack/corporate/passengers?apikey=' + apiKey,
            function(error, response, body) {
                // console.log(response.body);
            });
        res.status(200);
    });
}
