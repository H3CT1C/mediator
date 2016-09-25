module.exports = function(app) {
    var request = require('request');
    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
    //var corppassenger = app.api.corppassengers.model;

    app.get('/api/corppassengers', function(req, res) {
      app.api.corppassengers.model.find(function(err, passengers) {
          if (err) {
              return console.log(err);
          }
          console.log(passengers);
          res.json(passengers);
      });
    });

    app.put('/api/corppassengers/:id', function(req, res) {

        console.log("put request");
        res.status(200);
    });
};
