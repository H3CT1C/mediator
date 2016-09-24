var gulp = require('gulp');

var config = require('./config');
var plugins = require('gulp-load-plugins')({
    rename: {
        'gulp-autoprefixer': 'prefix',
        'gulp-minify-css': 'minifyCSS',
        'gulp-ng-html2js': 'html2js',
        'gulp-livereload': 'livereload'
    }
});

var onError = function(err) {
  console.log(err);
  this.emit('end');
};

var getTask = function(task) {
    return require('./gulp/' + task)(gulp, plugins, config, onError);
};

var task = function(name, dependencies) {
    if (dependencies) {
        gulp.task(name, dependencies, getTask(name));
    } else {
        gulp.task(name, getTask(name));
    }
};

task('jade-index');
task('less');
task('copy-vendor');
task('copy-assets');
task('clean');
task('templates');
task('min-js');
task('lint-client');
task('uglify', ['min-js']);
task('minify', ['less']);

task('inject-index', [
    'jade-index',
    'minify',
    'copy-vendor'
]);


// Tasks
gulp.task('default', ['demon']);

gulp.task('build', function(cb) {
    plugins.runSequence('clean', [
        'min-js',
        'inject-index',
        'templates',
        'copy-assets'
    ], cb);
});

gulp.task('demon', ['watch'],function() {
    plugins.nodemon({
            script: 'server/server.js',
            ext: 'js html jade',
            env: {
                'NODE_ENV': 'development'
            }, 
            // tasks: ['lint']
        })
        .on('start', function() {
            console.log('NODEMON: START');
        })
        .on('change', function() {
            console.log('NODEMON: CHANGE');
        })
        .on('restart', function() {
            console.log('restarted!');
        });
});

gulp.task('watch', ['build'], function() {
    plugins.livereload.listen();
    gulp.watch(config.app.js, ['min-js']);
    gulp.watch(config.app.watchLess, ['minify']);
    gulp.watch(config.app.jade, ['templates']);
    gulp.watch(config.app.index, ['inject-index']);
    gulp.watch(config.app.assets, ['copy-assets']);
    gulp.watch(['config.js'], ['copy-vendor', 'inject-index'])
});
