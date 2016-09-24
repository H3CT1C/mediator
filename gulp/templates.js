module.exports = function(gulp, plugins, config, onError) {
    return function() {
        return gulp.src(config.app.jade, {'base' : config.client_dir})
            .pipe(plugins.jade({
                locals: {}
            }))
            .on('error', onError)
            .pipe(plugins.html2js({
                moduleName: "templates"
            }))
            .on('error', onError)
            .pipe(plugins.concat("templates.js"))
            .pipe(gulp.dest(config.build_dir))
            .pipe(plugins.livereload());
    };
};