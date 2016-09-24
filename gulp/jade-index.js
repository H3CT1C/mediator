module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.client_dir + '/index.jade')
            .pipe(plugins.jade({
                locals: {}
            }))
            .on('error', onError)
            .pipe(plugins.rename('index.html'))
            .pipe(gulp.dest(config.build_dir))
            .pipe(plugins.livereload());
    };
};
