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
