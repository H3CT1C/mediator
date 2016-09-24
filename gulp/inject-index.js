module.exports = function(gulp, plugins, config, onError) {
    return function() {
        var target = gulp.src(config.build_dir + '/index.html');
        var sources = gulp.src(config.vendor.js.concat(config.vendor.css), {
            read: false,
            cwd: './client'
        });

        return target
            .pipe(plugins.debug())
            .pipe(plugins.inject(sources), {
                read: false
            })
            .on('error', onError)
            .pipe(gulp.dest(config.build_dir))
            .pipe(plugins.livereload());
    };
};
