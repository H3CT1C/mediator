// Module
angular.module('mediatorApp.mediator', [])

// Routing
.config(function config($stateProvider) {
    $stateProvider.state('mediator', {
        url: '/mediator',
        views: {
            "main": {
                controller: 'MediatorCtrl',
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
    $scope.tickets = [];
    $scope.availableTickets = [];

    $http.get('/api/tickets')
        .then((response) => {
            $scope.tickets = response.data;
            $scope.availableTickets = $scope.tickets.filter((ticket) => ticket.isAvailable);
            $scope.availableTickets = $scope.availableTickets.reverse();
            $scope.availableTickets.forEach((ticket) => ticket.departDate = new Date(ticket.departDate.split("\ ")[0]).toLocaleString());

        }, (error) => {
            console.error('ERROR 😡', error);
        });

      //end of controller
});
