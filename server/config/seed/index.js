module.exports = function(app) {
    var logger = require('services/logger')
    var passengerSeed = require('config/seed/passenger-seed')
    // Initial Seeding
    function initSeed() {
        var versionName = "Initial Seed: mediator";
        passengerSeed(app);
    }

    initSeed();
};
