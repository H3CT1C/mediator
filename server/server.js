var PORT = process.env.PORT || 3000;

// Setup Project Paths so we can just require('your-module')
// Search /server, /node_modules, and /lib
var path = require('path');
var _ = require('lodash');
require('app-module-path').addPath(__dirname);
require('app-module-path').addPath(path.join(__dirname, "../lib"));

var cors = require('cors'),
    express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    jwt = require('express-jwt'),
    morgan = require('morgan'),
    logger = require('services/logger'),
    app = express();

// Config
app.config = require('config');
app.slack = require('services/slack')(app, 'https://hooks.slack.com/services/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');

// Setup Webserver
app.use(cors());

// Setup express logging
app.use(morgan('short', {
    stream: logger.stream,
    skip: function(req, res) {
        var apiRegex = /\/api\//gi;
        return !apiRegex.test(req.originalUrl);
    }
}));

// Other Setup
app.use(bodyParser.json({
    limit: '50mb'
}));
require('config/upload')(app);

// Setup Live Reload IF not running in production
if (!app.config.isProd) {
    app.use(require('connect-livereload')({
        port: 35729
    }));
}

// Services
app.services = {}; // nothing for now

// Mongoose
logger.info('MongoURL:', app.config.mongo.uri);
app.db = mongoose.connect(app.config.mongo.uri, app.config.mongo.options);

// Serve up any static files
logger.info('Serving static files from: %s', path.join(__dirname, "/../build"));
app.use(express.static(path.join(__dirname, "/../build")));

// API Resources
app.res = require('res')(app);

// Seed
if (app.config.seed) {
    var seed = require('config/seed');
    seed(app);
}

// Start the server...
if (require.main === module) {

    if (process.env.NODE_ENV === "production") {

        var payload_to_slack = {
            text: '_STARTED_ <http://crackcookie.xyz/|http://crackcookie.xyz/>',
            icon_url: "http://i.imgur.com/Qdm0wfY.png",
            username: "mediator"
        };
        app.slack.send(payload_to_slack);
    }

    app.listen(PORT, function() {
        logger.info("listening on %d", PORT);
    });
}
