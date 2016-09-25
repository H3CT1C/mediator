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

    $http.get('/api/corppassengers').then(function(data){
           var userInfo = data;
           console.log(userInfo);
     });

     $http.get('/api/tickets/0165810756904').then(function(data){
       console.log(data);
      });


});
