var request = require('request');

module.exports = function(app, url) {

    // Example
    var example_payload = {
        text: "SOME TEXT HERE",
        icon_url: "http://i.imgur.com/woKA0LH.png",
        username: "Some Username"
    };

    // TODO - Put the URL in the config
    function send(payload) {
       request.post({
            url: url,
            json: true,
            rejectUnauthorized: false,
            body: payload
        }, function(err, response, body) {
            if (err) console.log("Slack Post Error:", err);
        });
    }

    return {
        send: send
    };
};
