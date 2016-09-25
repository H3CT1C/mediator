// Module
angular.module('mediatorApp.trips', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('trips', {
        url: '/',
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

    var resellTicket = function(ticketNumber) {
        corpPassengers.forEach(function(passenger) {
            if (passenger.ticketNumber === ticketNumber) {
                console.log(passenger);
                passenger.isAvailable = true;
            }
        });
    }

    var corpPassengers;
    $.getJSON("../../assets/json/passengers.json", function(json) {
        corpPassengers = json;
        resellTicket("0164876384747");
    });
});
