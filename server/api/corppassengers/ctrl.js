module.exports = function(app) {
    var request = require('request');
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    //var corppassenger = app.api.corppassengers.model;

    app.get('/api/corppassengers', function(req, res) {
        app.api.corppassengers.model.find(function(err, passengers) {
            if (err) {
                return console.log(err);
            }
            res.json(passengers);
        });
    });

    app.get('/api/corppassengers/:id', function(req, res) {
      app.api.corppassengers.model.findOne(id, function(err, passenger) {
          console.log('passengerGET:', passenger)
          if (err) {
              res.send('There was an error processing the tasks');
          } else {
              todo.read = true;
              todo.save();
              res.send('read');
          }
      });
    });

    //this will be used when the person decides to book a resellable ticket
    app.post('/api/corppassengers/:id', function(req, res) {

        console.log("put request");
        console.log(req.body);
        res.status(200);
    });
};
