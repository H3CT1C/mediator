// Module
angular.module('mediatorApp.mediator', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('mediator', {
        url: '/',
        views: {
            "main": {
                controller: 'mediatorCtrl',
                templateUrl: 'app/web/mediator/mediator.html'
            }
        },
        data: {
            pageTitle: 'Mediator'
        }
    });
})

// Controller
.controller('MediatorCtrl', function HomeCtrl($scope, $rootScope, $state, $http) {
    $scope._ = _;
    // var corpPassengers;
    // $.getJSON("../../assets/json/passengers.json", function(json) {
    //     corpPassengers = json;
    // });
    //
    // $scope.resellTicket = function(ticketNumber){
    //   corpPassengers.forEach(console.log(this));
    // }
    //end of controller
});
