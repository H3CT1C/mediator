module.exports = function(app) {
    var request = require('request');
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    var corppassenger = app.api.corppassengers.model;

    app.get('/api/corppassengers', function(req, res) {
        console.log('wtf😳', Math.floor(Date.now() / 1000));

        request('http://demo30-test.apigee.net/v1/hack/corporate/passengers?apikey=' + apiKey,
            function(error, response, body) {
                // console.log(response.body);
            });
        res.status(200);
    });
    corppasenger.save()

    app.put('/api/corppassengers/:id', function(req, res) {

        console.log("put request");
        res.status(200);
    });
};
