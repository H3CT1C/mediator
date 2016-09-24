module.exports = function(gulp, plugins, config) {
    return function() {
        return gulp.src(config.app.js)
            .pipe(plugins.jshint())
            .pipe(plugins.jshint.reporter('default'));
    };
};
