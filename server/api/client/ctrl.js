module.exports = function(app) {
    // Send everything else to angular
    app.get('*', function(req, res) {
        res.status(200).sendFile(app.config.index);
    });
};
