// Module
angular.module('mediatorApp.trips', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('trips', {
        url: '/trips/:name',
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
.controller('TripsCtrl', function HomeCtrl($scope, $rootScope, $state, $http, $stateParams) {
    $scope._ = _;
    $scope.passengers = [];
    $scope.currentPassengerName = $stateParams.name;
    $scope.currentPassenger = [];
    $scope.ticketNumber = '';

    $http.get('/api/corppassengers')
        .then((response) => {
            $scope.passengers = response.data;
            $scope.currentPassenger = $scope.passengers.filter((passenger) => passenger.passengerName === $scope.currentPassengerName);

            $scope.ticketNumber = $scope.currentPassenger[0].ticketNumber;

        }, (error) => {
            console.error('ERROR 😡', error);
        });
        
    //end of controller
});
