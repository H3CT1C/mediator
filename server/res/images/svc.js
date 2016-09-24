module.exports = function(app) {
    var _ = require('lodash');
    var path = require('path');
    var fs = require('fs');
    var base36 = require('base36');
    var resizer = require('services/image-resizer');
    var s3Client = require('services/s3')(app);
    var debug = require('debug')(app.config.debug);

    var IMAGE_ROOT = app.config.dataPath("/images/");

    // TODO - Make this a promise and make it finish on image upload end...
    var create = function(src, tags) {
        return new Promise((resolve, reject) => {

            var img = new app.res.images.model();
            img.shortcode = base36.generate(12);
            img.tags = tags;
            img.extension = path.extname(src).slice(1).toLowerCase();
            img.urls = {};
            var promises = [];

            promises = app.config.image.sizes.map(function(sizeOpts) {
                return resizer.resize(src, sizeOpts);
            });

            Promise.all(promises).then(images => {

                var uploadPromises = [];
                images.forEach(function(image) {
                    // Figure out Image Name (for its size)
                    var ext = path.extname(src);
                    var name = path.basename(src, ext);
                    var imageName = `${img.shortcode}-${image.sizeOpts.name}.${img.extension}`;

                    if (img.extension === "gif" && image.sizeOpts.name != "thumb") {
                        imageName = `${img.shortcode}.${img.extension}`;
                    }

                    img.urls[image.sizeOpts.name] = `${app.config.amazon.s3Base}${app.config.amazon.bucket}/${app.config.amazon.imgFolder}${imageName}`;

                    // Upload to Amazon
                    if (img.extension !== "gif") {
                        uploadPromises.push(s3Client.uploadBuffer(image.buffer, imageName));
                    } else {
                        if (image.sizeOpts.name === "original") {
                            console.log("Uploading-o", imageName);
                            uploadPromises.push(s3Client.upload(src, imageName));
                        }
                        if(image.sizeOpts.name === "thumb") {
                            console.log("Uploading-t", imageName);
                            uploadPromises.push(s3Client.uploadBuffer(image.buffer, imageName));
                        }
                    }

                    Promise.all(uploadPromises).then(uploads => {
                        debug.log("Upload Complete for", img.shortcode, src);
                        return resolve(img);
                    }).catch(err => {
                        console.log(err);
                    });

                });
            }, function(err) {
                console.log(err);
            }).catch(function(err) {
                console.log("Resize Error:", err);
            });

        });
    };

    return {
        create: create
    };
}
