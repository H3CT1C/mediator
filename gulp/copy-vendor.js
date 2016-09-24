module.exports = function (gulp, plugins, config, onError) {
    return function () {
        return gulp.src(config.vendor.js.concat(config.vendor.css).concat(config.vendor.assets), {
            cwd: 'client',
            base: './client'
        })
        .on('error', onError)
        .pipe(gulp.dest('./build/'))
        .pipe(plugins.livereload());
    };
};