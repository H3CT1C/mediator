module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.build_dir + "/" + config.appname + '.css')
            .pipe(plugins.minifyCSS())
            .on('error', onError)
            .pipe(plugins.rename('bundle.min.css'))
            .pipe(gulp.dest(config.build_dir + "/assets"))
            .pipe(plugins.livereload());
    };
};
