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

    $.getJSON("../assets/json/passengers.json", function(json) {
    console.log(json); // this will show the info it in firebug console
    });

    //end of controller
});
