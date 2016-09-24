// Module
angular.module('mediatorApp.404', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('404', {
        url: '/404',
        views: {
            "main": {
                controller: 'FourOhFourCtrl',
                templateUrl: 'app/web/404/404.html'
            }
        },
        data: {
            pageTitle: '404'
        }
    });
})

// Controller
.controller('FourOhFourCtrl', function FourOhFourCtrl($rootScope) {
    $rootScope.backgroundUrl = null;
    // Prerender.io requires this meta-tag in order to properly return a 404 instead of a 200 to crawlers.
    $rootScope.metatags = {};
    $rootScope.metatags['prerender-status-code'] = '404';

});
