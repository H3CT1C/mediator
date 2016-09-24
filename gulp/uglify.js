module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.build_dir + "/" + config.appname + ".js")
            .pipe(plugins.uglify())
            .on('error', onError)
            .pipe(plugins.rename(config.build_dir + "/" + config.appname + ".min.js"))
            .pipe(gulp.dest(config.build_dir));
    };
};
