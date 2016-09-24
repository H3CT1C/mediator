module.exports = function(app) {

    var fs = require('fs');
    var fstream = require('fstream');
    var mkdirp = require('mkdirp');
    var _ = require('lodash');
    var debug = require('debug')(app.config.debug);

    var IMAGE_ROOT = app.config.dataPath("/images/");
    app.get('/api/images/:shortcode', function(req, res) {
        app.api.images.model.findOne({
            shortcode: req.params.shortcode
        }, function(err, img) {
            if (err) {
                res.status(500).json({
                    error: err
                });
            } else {
                res.status(200);
            }
        });
    });

    app.get('/api/images', function(req, res) {
        app.api.images.model.find(function(err, imgs) {
            if (err) {
                return console.log(err);
            }
            res.json(imgs);
        });
    });

    app.get('/api/images/tag/:tag', function(req, res) {
        var tag = req.params.tag;
        app.api.images.model.find({
            tags: tag
        }, function(err, imgs) {
            if (err) {
                return console.log(err);
            }
            res.json(imgs);
        });
    });

    app.delete('/api/images/:shortcode', function(req, res) {
        app.api.images.model.findOne({
            shortcode: req.params.shortcode
        }, function(err, img) {
            if (err) {
                return res.status(500).json({
                    error: err
                });
            }

            img.remove(function(err) {
                if (err) {
                    res.status(500).json({
                        error: err
                    });
                } else {
                    res.status(204).send();
                }
            });
        });
    });

    app.post('/api/images', function(req, res) {
        if (!req.files.file) {
            return res.status(500).json({
                error: "bad request. no file."
            });
        }

        var data = JSON.parse(req.body.data);
        var file = req.files.file;
        debug.log("Creating", file.path);
        app.api.images.svc.create(file.path, data.tags).then(function(img) {
            debug.log("Created this image...",img);
            res.send(img);
        }).catch(function(err) {
            res.status(500).json({
                error: err
            });
        });
    });
};
