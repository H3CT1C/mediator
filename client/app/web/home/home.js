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

    var apiKey = 'KR2htVYSHtcon3CGp2GETbAgNFFvYAXw';

    $http.get('https://demo30-test.apigee.net/v1/hack/corporate/passengers?apikey=' + apiKey)
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });

    //end of controller
});
