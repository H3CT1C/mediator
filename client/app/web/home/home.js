// Module
angular.module('mediatorApp.home', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        views: {
            "main": {
                controller: 'HomeCtrl',
                templateUrl: 'app/web/home/home.html'
            }
        },
        data: {
            pageTitle: 'Home'
        }
    });
})

// Controller
.controller('HomeCtrl', function HomeCtrl($scope, $rootScope, $state, $http) {
    $scope._ = _;

    //end of controller
});
