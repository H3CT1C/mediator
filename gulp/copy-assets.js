module.exports = function (gulp, plugins, config, onError) {
    return function () {
        return gulp.src(config.app.assets, {
            base: config.client_dir
        })
        .on('error', onError)
        .pipe(gulp.dest(config.build_dir))
        .pipe(plugins.livereload());
    };
};