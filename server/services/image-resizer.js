var path = require('path')
var lwip = require('lwip')

var allowedFileExtensions = [
    "jpg",
    "gif",
    "png"
];

function isValidSize(w, h) {
    return w && h && w > 0 && h > 0;
}

var resize = function(src, sizeOpts) {
    return new Promise((resolve, reject) => {

        var w = sizeOpts.width;
        var h = sizeOpts.height;
        var quality = sizeOpts.quality || 70;
        var extension = path.extname(src);

        if (extension && extension.length > 0) {
            extension = extension.slice(1);
            extension = extension.toLowerCase();
        } else {
            return reject(new Error("File type can not be determined."));
        }


        if (extension === "jpeg") {
            extension = "jpg";
        }

        if (allowedFileExtensions.indexOf(extension) < 0) {
            return reject(new Error("Filetype not supported."));
        }

        if (sizeOpts.type === "original" || (extension === "gif" && sizeOpts.name != "thumb")) {
            lwip.open(src, function(err, image) {
                if (err) {
                    return reject(err);
                }
                image.batch()
                    .toBuffer(extension, {
                        quality: quality
                    }, (err, buffer) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve({
                            sizeOpts: sizeOpts,
                            buffer: buffer,
                            src: src
                        });
                    });
            });
        } else {
            if (!isValidSize(w, h)) {
                console.log(sizeOpts);
                return reject(new Error("Invalid size - w:" + w + " h:" + h));
            }

            lwip.open(src, function(err, image) {
                if (err) {
                    return reject(err);
                }

                image.batch()
                    .cover(w, h)
                    .toBuffer(extension, {
                        quality: quality
                    }, (err, buffer) => {
                        if (err) {
                            return reject(err);
                        }
                        return resolve({
                            sizeOpts: sizeOpts,
                            buffer: buffer,
                            src: src
                        });
                    });
            });
        }


    });
};


module.exports = {
    resize: resize
};
