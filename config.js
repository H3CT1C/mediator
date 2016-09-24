// Build Config
var liveReload = process.env.NODE_ENV === "production" ? []: ["http://localhost:35729/livereload.js?snipver=1"];

module.exports = {

    appname: 'mediator',
    build_dir: './build',
    public_dir: './server/public',
    client_dir: './client',

    app: {
      watchjs: ['client/app/**/*.js'],
          js: ['client/app/**/*.js'],
          jade: ['client/app/**/*.jade'],
          less: ['client/less/main.less', 'client/app/**/*.less'],
          watchLess: ['client/less/**/*.less', 'client/app/**/*.less'],
          entrypoint: 'client/app/app.js',
          assets: 'client/assets/**',
          index: 'client/index.jade'
    },

    vendor: {
        js: [
            'vendor/angular/angular.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/lodash/lodash.min.js',
            'vendor/jquery/dist/jquery.js',
            'vendor/restangular/dist/restangular.js',
            'vendor/ng-file-upload/ng-file-upload-all.js',
            'vendor/moment/moment.js',
            'vendor/angular-moment/angular-moment.js',
            'vendor/Materialize/bin/materialize.js',
            'vendor/angular-animate/angular-animate.js',
            'vendor/angular-socket-io/socket.js',
            'vendor/angular-resource/angular-resource.js',
            'vendor/angular-cookies/angular-cookies.js',
            'vendor/angular-jwt/dist/angular-jwt.js'
        ].concat(liveReload),
        css: [
            "vendor/Materialize/bin/materialize.css",
            "vendor/font-awesome/css/font-awesome.css"
        ],
        assets: [
            "vendor/Materialize/font/**/*",
            "vendor/font-awesome/fonts/**/*"
        ]
    }
};
