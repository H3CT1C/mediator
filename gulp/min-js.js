module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.app.js)
            .pipe(plugins.sourcemaps.init())
            .on('error', onError)
            .pipe(plugins.babel())
            .on('error', onError)
            .pipe(plugins.concat('bundle.js'))
            .on('error', onError)
            .pipe(plugins.sourcemaps.write("."))
            .on('error', onError)
            .pipe(gulp.dest(config.build_dir))
            .pipe(plugins.livereload());
    };
};
