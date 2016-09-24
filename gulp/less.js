module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.app.less)
            .pipe(plugins.less())
            .on('error', onError)
            .pipe(plugins.prefix({
                cascade: true
            }))
            .on('error', onError)
            .pipe(plugins.concat('bundle.css'))
            .on('error', onError)
            .pipe(gulp.dest(config.build_dir + "/assets"))
            .pipe(plugins.livereload());
    };
};
