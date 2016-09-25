module.exports = function(app) {
    var path = require('path');
    var debug = require('debug')(app.config.debug);

    function getAllTheThings(module, app) {
        var thing = {};
        try {
            thing.model = require('./' + module + '/model')(app);
        } catch (e) {
            if (!e.message.match(/cannot find module/gi)) {
                console.log(e.message);
            }
        }
        try {
            thing.svc = require('./' + module + '/svc')(app);
        } catch (e) {
            if (!e.message.match(/cannot find module/gi)) {
                console.log(e.message);
            }
        }
        thing.ctrl = require('./' + module + '/ctrl')(app);
        return thing;
    }

    // Order matters because of route priority.
    // Client should be last since it's the catch-all
    return {
        images: getAllTheThings('images', app),
        corppassengers: getAllTheThings('corppassengers', app),
        tickets: getAllTheThings('tickets', app),
        version: getAllTheThings('version', app),
        client: getAllTheThings('client', app) // Must go last...
    };
};
