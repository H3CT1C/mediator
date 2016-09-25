var bcrypt = require('bcrypt');
var salt = "$2a$10$0D9EdeLzhglYlLebNboIRu";


function createCorpPassenger(app, passenger) {
    return new Promise((resolve, reject) => {
        var encryptedConfNumber = bcrypt.hashSync(passenger.confNumber, salt)

        var corppassenger = new app.api.corppassengers.model();

        corppassenger.uuid = passenger.uuid;
        corppassenger.type = passenger.type;
        corppassenger.created = passenger.created;
        corppassenger.modified = passenger.modified;
        corppassenger.confNumber = encryptedConfNumber;
        corppassenger.freqFlierNumber = passenger.freqFlierNumber;
        corppassenger.lastBookingData = passenger.lastBookingData;
        corppassenger.passengerName = passenger.passengerName;
        corppassenger.ticketNumber = passenger.ticketNumber;
        corppassenger.totalBookingsToDate = passenger.totalBookingsToDate;

        corppassenger.save(function(err) {
            if (err) {
                console.log(err);
                return reject(err);
            }
            console.log("corpPassenger created", corppassenger.passengerName);
            return resolve(corppassenger);
        });
    });

};

module.exports = function(app) {
    return new Promise((resolve, reject) => {

        app.api.corppassengers.model.find({}).remove(function() {
            var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';
            var request = require('request');
            var parsedJSON = require('./data/passengers.json');
            var passengers = parsedJSON;
            var passenger = [];
            var promises = [];
            passengers.forEach(function(passenger, index, array) {
                promises.push(createCorpPassenger(app, passenger));
            });
            Promise.all(promises).then(function(response) {
                return resolve(response);
            }, function(err) {
                return reject(err);
            });


        });
    });
};
