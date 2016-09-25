module.exports = function(app) {
    var logger = require('services/logger')
    var passengerSeed = require('config/seed/passenger-seed')
    var ticketsSeed = require('config/seed/tickets-seed')
    // Initial Seeding
    function initSeed() {
        var versionName = "Initial Seed: mediator";
        passengerSeed(app);
        ticketsSeed(app);
    }

    initSeed();
};
