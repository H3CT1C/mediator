angular.module('mediatorApp', [
    'ui.router.state',
    'ngFileUpload',
    'ngResource',
    'ngCookies',
    'templates',
    'mediatorApp.config',
    'mediatorApp.404',
    'mediatorApp.home',
    'mediatorApp.mediator',
    'mediatorApp.trips'
])

.config(function myAppConfig($locationProvider, $stateProvider, $httpProvider, $urlRouterProvider, SiteConfig) {
    // reroute to 404 page
    $urlRouterProvider.otherwise('/404');

    // $httpProvider.defaults.withCredentials = true;
    $locationProvider.html5Mode(true);

    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
})

.controller('AppCtrl', function($http, $scope, $rootScope, $location, $state, SiteConfig) {
    $scope.config = SiteConfig;
    $rootScope.backgroundUrl = null;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        if (angular.isDefined(toState.data.pageTitle)) {
            $rootScope.pageTitle = SiteConfig.siteName;
        }
    });
});
