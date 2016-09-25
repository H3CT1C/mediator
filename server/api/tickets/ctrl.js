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
};
