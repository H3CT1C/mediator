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

    $scope.list = [
      {
        name: "cool",
        destination: "beans"
      },
      {
        name: "cool",
        destination: "beans"
      },
      {
        name: "cool",
        destination: "beans"
      },
      {
        name: "cool",
        destination: "beans"
      }
    ];

    //end of controller
});
