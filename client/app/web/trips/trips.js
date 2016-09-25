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
            pageTitle: 'My Trips'
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
    $scope.ticket;
    $scope.numberOfTickets = 0;

    $http.get('/api/corppassengers')
        .then((response) => {
            $scope.passengers = response.data;
            $scope.currentPassenger = $scope.passengers.filter((passenger) => passenger.passengerName === $scope.currentPassengerName);

            if ($scope.currentPassenger.length > 0) {
                $scope.ticketNumber = $scope.currentPassenger[0].ticketNumber;
                $http.get("/api/tickets/" + $scope.ticketNumber)
                    .then((response) => {
                        console.log(response);
                        if (!response.data.isAvailable) {
                            $scope.ticket = response.data;
                            $scope.numberOfTickets = 1;
                            $scope.ticket.departDate = new Date($scope.ticket.departDate.split("\ ")[0]).toLocaleString();
                        } else {
                            $scope.numberOfTickets = 0;
                        }
                    }, (error) => {
                        console.error('TICKET ERROR 😡', error);
                    });
            } else {
                console.log("No ticket number available for passenger", $scope.currentPassengerName);
            }

        }, (error) => {
            console.error('PASSENGER ERROR 😡', error);
        });


    $scope.relist = function(ticketNumber) {

        $http.put("/api/tickets/" + ticketNumber)
            .then((response) => {
                console.log(response);
                $http.get("/api/tickets/" + $scope.ticketNumber)
                    .then((response) => {
                        console.log(response);
                        if (!response.data.isAvailable) {
                            $scope.ticket = response.data;
                            $scope.numberOfTickets = 1;
                        } else {
                          $scope.numberOfTickets = 0;
                        }
                    }, (error) => {
                        console.error('TICKET ERROR 😡', error);
                    });
            }, (error) => {
                console.log(error);
            });
    }

    $scope.goToMediator = function() {
      console.log('hi');
      $state.go('/mediator');
    }

    //end of controller
});
