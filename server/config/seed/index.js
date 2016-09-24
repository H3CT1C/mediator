module.exports = function(app) {
    var logger = require('services/logger')

    // Initial Seeding
    function initSeed() {
        var versionName = "Initial Seed: mediator";
        app.res.version.model.find({
            $query: {
                version: versionName
            }
        }, function(err, versions) {

            if (!versions || versions.length == 0) {
                logger.info("Running SEED %s", versionName);

                // Remove All Images
                app.res.images.model.find({}).remove(function() {});

            } else {
                logger.info("Already ran %s", versionName);
            }
        });
    }

    function done(versionName) {
        var version = new app.res.version.model();
        version.version = versionName;
        version.save(function(err) {
            if (err) logger.error(err);
        });
    }

    initSeed();
};
