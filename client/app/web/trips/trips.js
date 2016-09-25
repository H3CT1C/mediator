// Module
angular.module('mediatorApp.trips', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('trips', {
        url: '/trips',
        views: {
            "main": {
                controller: 'TripsCtrl',
                templateUrl: 'app/web/trips/trips.html'
            }
        },
        data: {
            pageTitle: 'Trips'
        }
    });
})

// Controller
.controller('TripsCtrl', function HomeCtrl($scope, $rootScope, $state, $http) {
    $scope._ = _;

    //end of controller
});
