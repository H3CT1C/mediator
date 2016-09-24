var del = require('del');

module.exports = function(gulp, plugins, config) {
    return function() {
        return del([
            config.build_dir + "/*"
        ]);
    };
};
